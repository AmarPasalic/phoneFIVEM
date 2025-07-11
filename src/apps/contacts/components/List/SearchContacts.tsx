import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { useDebounce } from '@os/phone/hooks/useDebounce';
import { useSetContactFilterInput } from '../../hooks/state';
import { NPWDInput, NPWDSearchInput } from '@ui/components';
import { Search } from "lucide-react";

export const SearchContacts: React.FC = () => {
    const [t] = useTranslation();
    const setFilterVal = useSetContactFilterInput();
    const [inputVal, setInputVal] = useState('');

    const debouncedVal = useDebounce<string>(inputVal, 500);

    useEffect(() => {
        setFilterVal(debouncedVal);
    }, [debouncedVal, setFilterVal]);

    return (
        <div className="flex justify-center bg-black px-4 dark:bg-black py-2">
            <div className="flex items-center bg-neutral-800 rounded-md px-2 border dark:border-neutral-700 w-full">
                <NPWDInput
                    className="group-focus:ring-2 flex-1 bg-transparent"
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder={t('CONTACTS.PLACEHOLDER_SEARCH_CONTACTS')}
                    value={inputVal}
                />
                <Search className="h-5 w-5 dark:text-neutral-400 ml-2" />
            </div>
        </div>
    );
};
