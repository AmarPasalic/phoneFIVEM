import React from 'react';
import { AppWrapper } from '@ui/components';
import { AppContent } from '@ui/components/AppContent';
import LaborApp from './LaborApp';

const LaborAppWrapper: React.FC = () => {
  return (
    <AppWrapper>
      <AppContent>
        <LaborApp />
      </AppContent>
    </AppWrapper>
  );
};

export default LaborAppWrapper; 