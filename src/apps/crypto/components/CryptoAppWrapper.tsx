import React from 'react';
import { AppWrapper } from '@ui/components';
import { AppContent } from '@ui/components/AppContent';
import { useApp } from '@os/apps/hooks/useApps';
import { CryptoThemeProvider } from '../providers/CryptoThemeProvider';
// import { AppTitle } from '@ui/components/AppTitle';
import { CryptoApp } from '../CryptoApp';

export const CryptoAppWrapper: React.FC = () => {
  const crypto = useApp('CRYPTO');
  return (
   

     
       <CryptoApp />
    
  );
}; 