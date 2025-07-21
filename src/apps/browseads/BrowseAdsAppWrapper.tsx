import React from 'react';
import { AppWrapper } from '@ui/components';
import { AppContent } from '@ui/components/AppContent';
import BrowseAdsApp from './BrowseAdsApp';

const BrowseAdsAppWrapper: React.FC = () => {
  return (
    <AppWrapper>
      <AppContent>
        <BrowseAdsApp />
      </AppContent>
    </AppWrapper>
  );
};

export default BrowseAdsAppWrapper; 