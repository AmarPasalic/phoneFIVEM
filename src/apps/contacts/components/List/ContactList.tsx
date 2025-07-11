import React from 'react';
import { SearchContacts } from './SearchContacts';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useFilteredContacts } from '../../hooks/state';
import { useCall } from '@os/call/hooks/useCall';
import useMessages from '@apps/messages/hooks/useMessages';
import LogDebugEvent from '@os/debug/LogDebugEvents';
import { useContactActions } from '@apps/contacts/hooks/useContactActions';
import { useMyPhoneNumber } from '@os/simcard/hooks/useMyPhoneNumber';
import { Phone, MessageSquare, Plus, Clipboard, UsersRound } from 'lucide-react';
import { List, ListItem, NPWDButton } from '@npwd/keyos';
import { initials } from '@utils/misc';
import { useQueryParams } from '@common/hooks/useQueryParams';
import { Tooltip } from '@ui/components/Tooltip';
import { useTwitterProfileValue } from "@apps/twitter/hooks/state";
import { useTranslation } from "react-i18next";
import { setClipboard } from "@os/phone/hooks";
import { useSnackbar } from '@os/snackbar/hooks/useSnackbar';
import fetchNui from "@utils/fetchNui";
import { Contact } from '@typings/contact';


export const ContactList: React.FC = () => {
  const filteredContacts = useFilteredContacts();
  const history = useHistory();

  const myNumber = useMyPhoneNumber()
  const { avatar_url } = useTwitterProfileValue()

  return (
    <div className="relative bg-neutral-700 min-h-full w-full">
      {/* Header section above search */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2 bg-black">
        <div className="flex items-center">
          <span className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mr-2">&#x2039;</span>
          <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Contact List</span>
        </div>
        <div className="flex items-center space-x-5">
          {/* Placeholder icons */}
          <img src="/media/health-insurance.png" alt="health insurance" className="w-5 h-5 object-contain filter invert" />
          <img src="/media/contact-book.png" alt="contact book" className="w-5 h-5 object-contain filter invert" />
          <img src="/media/circle.png" alt="circle" className="w-5 h-5 object-contain filter invert" />
        </div>
      </div>

      <div className="sticky bg-black top-0 z-50">
        <div className="flex justify-center bg-black px-4 bg-black">
          <div className="w-[90%] bg-black">
            <SearchContacts />
          </div>
        </div>
      </div>

      <div className="overflow-y-auto w-full bg-neutral-700">
        <nav className="overflow-y-auto" aria-label="Directory">
          <List className="rounded-none bg-neutral-700 p-0 m-0">
            {(filteredContacts as Contact[]).map((contact: Contact) => (
              <ListItem key={contact.id} className="rounded-none p-0 m-0">
                <ContactItem {...contact} />
              </ListItem>
            ))}
          </List>
        </nav>
      </div>
    </div>
  );
};

interface ContactItemProps extends Contact {
  onClick?: () => void;
}

const SelfContact = ({ number, avatar }: { number: string, avatar: string }) => {
  const [t] = useTranslation();
  const { addAlert } = useSnackbar()
  const copyNumber = () => {
    setClipboard(number);
    addAlert({
      message: t('GENERIC.WRITE_TO_CLIPBOARD_MESSAGE', {
        content: 'Number',
      }),
      type: 'success',
    });
  }

  const shareLocal = () => {
    fetchNui(ContactEvents.LOCAL_SHARE)
  }

  return (
    <ListItem>
      <div className="min-w-0 flex-1">
        <div
          className="flex items-center justify-between focus:outline-none"
        >
          <div className="flex items-center space-x-2">
            {avatar && avatar.length > 0 ? (
              <img src={avatar} className="inline-block h-10 w-10 rounded-full" alt={'avatar'} />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700">
                <span className="text-gray-600 dark:text-gray-300">Me</span>
              </div>
            )}
            <div>
              <p className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                {t('CONTACTS.MY_NUMBER')}
              </p>
              <p className="text-sm text-neutral-400">{number}</p>
            </div>
          </div>
          <div className="space-x-3">
            <Tooltip title={t('GENERIC.WRITE_TO_CLIPBOARD_TOOLTIP', { content: 'Number' }) as string}>
              <button
                onClick={copyNumber}
                className="rounded-full bg-neutral-100 p-3 text-neutral-300 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-700"
              >
                <Clipboard size={20} />
              </button>
            </Tooltip>
            <Tooltip title={t('CONTACTS.NEARBY_SHARE')} >
              <button
                onClick={shareLocal}
                className="rounded-full bg-neutral-100 p-3 text-neutral-300 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-700"
              >
                <UsersRound size={20} />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </ListItem>
  );
}

const ContactItem = ({ number, avatar, id, display }: ContactItemProps) => {
  const query = useQueryParams<{ referal: string }>();
  const { referal } = query;

  const { initializeCall } = useCall();
  const { goToConversation } = useMessages();
  const { findExistingConversation } = useContactActions();
  const myPhoneNumber = useMyPhoneNumber();
  const history = useHistory();

  const startCall = (e) => {
    e.stopPropagation();
    e.preventDefault();
    LogDebugEvent({
      action: 'Emitting `Start Call` to Scripts',
      level: 2,
      data: true,
    });
    initializeCall(number.toString());
  };

  const handleMessage = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const phoneNumber = number.toString();
    LogDebugEvent({
      action: 'Routing to Message',
      level: 1,
      data: { phoneNumber },
    });
    const conversation = findExistingConversation(myPhoneNumber, phoneNumber);
    if (conversation) {
      return goToConversation(conversation);
    }

    history.push(`/messages/new?phoneNumber=${phoneNumber}`);
  };

  return (
    <div
      style={{ borderRadius: 0 }}
      className="flex items-center justify-between w-full rounded-none px-4 py-3 transition bg-neutral-800 border-b border-neutral-600 shadow-none"
    >
      {/* Avatar/Initial */}
      <div className="flex items-center space-x-3 min-w-0">
        <div style={{ borderRadius: 0 }} className="flex items-center justify-center h-10 w-10 rounded-none bg-neutral-800 border border-neutral-600 text-neutral-300 text-lg font-bold">
          {avatar && avatar.length > 0 ? (
            <img src={avatar} alt="avatar" style={{ borderRadius: 0 }} className="h-10 w-10 rounded-none bg-neutral-800 border border-neutral-600" />
          ) : (
            <span>{initials(display)}</span>
          )}
        </div>
        <div className="min-w-0">
          <div className="font-semibold truncate text-neutral-100">{display}</div>
          <div className="text-xs truncate text-neutral-400">{number}</div>
        </div>
      </div>
      {/* Only star icon remains */}
      <div className="flex items-center space-x-2 min-w-fit">
        {/* Star icon placeholder, can be replaced with logic for favorites */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-neutral-500 ml-2 opacity-60 relative -top-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.484.039.682.663.294.98l-4.204 3.404a.563.563 0 00-.192.618l1.285 5.385c.112.47-.39.84-.797.593l-4.646-2.885a.563.563 0 00-.586 0l-4.646 2.885c-.407.247-.909-.123-.797-.593l1.285-5.385a.563.563 0 00-.192-.618L2.068 10.377c-.388-.317-.19-.94.294-.98l5.518-.442a.563.563 0 00.475-.345l2.125-5.111z" />
        </svg>
      </div>
    </div>
  );
};
