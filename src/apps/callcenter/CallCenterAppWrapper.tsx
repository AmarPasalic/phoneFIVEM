import React from 'react';
import { AppWrapper } from '@ui/components';
import { AppContent } from '@ui/components/AppContent';
import { CallCenterApp } from './CallCenterApp';

export const CallCenterAppWrapper: React.FC = () => {
  return (
    <AppWrapper>
      <AppContent>
        <CallCenterApp />
      </AppContent>
    </AppWrapper>
  );
}; 