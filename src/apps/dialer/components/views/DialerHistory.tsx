import React, { useCallback } from 'react';
import { List, ListItem, NPWDButton } from '@npwd/keyos';
import { useContactActions } from '../../../contacts/hooks/useContactActions';
import { CallHistoryItem } from '../../../../../typings/call';
import { useTranslation } from 'react-i18next';
import { Box, useTheme, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import { useMyPhoneNumber } from '@os/simcard/hooks/useMyPhoneNumber';
import { useDialHistory } from '../../hooks/useDialHistory';
import { useCall } from '@os/call/hooks/useCall';
import { useContacts } from '../../../contacts/hooks/state';
import { Phone, PhoneForwarded, PhoneIncoming, UserRoundPlus } from 'lucide-react';
import { initials } from '@utils/misc';
import { ChevronDown } from 'lucide-react';

export const DialerHistory: React.FC = () => {
  const myNumber = useMyPhoneNumber();
  const { getDisplayByNumber } = useContactActions();
  const { initializeCall } = useCall();
  const calls = useDialHistory();
  const contacts = useContacts();
  const history = useHistory();
  const [t] = useTranslation();
  const phoneTheme = useTheme();

  const handleCall = (phoneNumber) => {
    initializeCall(phoneNumber);
  };

  // To display the name, force a re-render when we get contacts | issue #432
  const getDisplay = useCallback(
    (number: string) => (contacts.length ? getDisplayByNumber(number) : number),
    [contacts, getDisplayByNumber],
  );

  if (!calls?.length) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" paddingTop={35}>
        <p>
          {
            <Typography style={{ color: phoneTheme.palette.text.primary }}>
              {t('DIALER.NO_HISTORY')}
            </Typography>
          }
          <span role="img" aria-label="sad">
            😞
          </span>
        </p>
      </Box>
    );
  }

  return (
    <div className="relative bg-neutral-700 min-h-full w-full">
      {/* Header section above call history */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2 bg-black">
        <div className="flex items-center">
          <span className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mr-2" style={{cursor: 'pointer'}} onClick={() => history.push('/')}>{'<'}</span>
          <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Call History</span>
        </div>
        <div className="flex items-center space-x-5">
          {/* Placeholder icons */}
          <img src="/media/health-insurance.png" alt="health insurance" className="w-5 h-5 object-contain filter invert" />
          <img src="/media/contact-book.png" alt="contact book" className="w-5 h-5 object-contain filter invert" />
          <img src="/media/circle.png" alt="circle" className="w-5 h-5 object-contain filter invert" />
        </div>
      </div>
      <div className="px-0">
        <List>
          {calls.map((call: CallHistoryItem) => {
            const isOutgoing = call.transmitter === myNumber;
            const isMissed = !isOutgoing && !call.is_accepted;
            const isIncoming = !isOutgoing && call.is_accepted;
            const contactNumber = isOutgoing ? call.receiver : call.transmitter;
            const displayName = call.isAnonymous ? 'Anonymous' : getDisplay(contactNumber);
            const avatar = null; // Optionally fetch avatar if available
            const timeAgo = dayjs().to(dayjs.unix(parseInt(call.start)));

            return (
              <div
                key={call.id}
                className={
                  `flex items-center justify-between w-full rounded-none px-4 py-3 transition bg-neutral-800 border-b border-neutral-600 shadow-none`
                }
              >
                {/* Avatar/Initial and info */}
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-neutral-800 border border-neutral-600 text-neutral-300 text-lg font-bold">
                    {avatar ? (
                      <img src={avatar} alt="avatar" className="h-10 w-10 rounded-full bg-neutral-800 border border-neutral-600" />
                    ) : (
                      <span>{initials(displayName)}</span>
                    )}
                  </div>
                  <div className="min-w-0 flex flex-col justify-center">
                    <div className={"font-semibold truncate text-neutral-100"}>{displayName}</div>
                    <div className="flex items-center space-x-2">
                      <div className={`text-xs truncate ${isMissed ? 'text-red-400' : 'text-neutral-400'}`}>{contactNumber}</div>
                      {/* Call type icon inline with number */}
                      {isOutgoing && <PhoneForwarded size={16} className="text-green-400" />}
                      {isMissed && <PhoneIncoming size={16} className="text-red-400" />}
                      {isIncoming && <PhoneIncoming size={16} className="text-blue-400" />}
                    </div>
                  </div>
                </div>
                {/* ChevronDown and time ago */}
                <div className="flex flex-col items-center min-w-fit ml-2">
                  <ChevronDown size={20} className="text-neutral-600" />
                  <span className="text-xs text-neutral-400 mt-1 whitespace-nowrap">{timeAgo}</span>
                </div>
              </div>
            );
          })}
        </List>
      </div>
    </div>
  );
};
