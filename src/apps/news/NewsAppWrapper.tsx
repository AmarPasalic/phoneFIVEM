import React from 'react';
import { AppWrapper } from '@ui/components';
import { AppContent } from '@ui/components/AppContent';
import { NewsApp } from './NewsApp';

export const NewsAppWrapper: React.FC = () => {
  return (
    <AppWrapper>
      <AppContent>
        <NewsApp />
      </AppContent>
    </AppWrapper>
  );
}; 