import React from 'react';
import { useSettings } from './apps/settings/hooks/useSettings';
import { usePhoneVisibility } from '@os/phone/hooks/usePhoneVisibility';
import { Slide } from '@mui/material';
import { useWallpaper } from './apps/settings/hooks/useWallpaper';
import { useLocation } from 'react-router-dom';

interface PhoneWrapperProps {
  children: React.ReactNode;
}

const PhoneWrapper: React.FC<PhoneWrapperProps> = ({ children }) => {
  const [settings] = useSettings();
  const { bottom, visibility } = usePhoneVisibility();
  const wallpaper = useWallpaper();

  const { pathname } = useLocation();

  return (
    <Slide direction="up" timeout={{ enter: 500, exit: 500 }} in={visibility}>
      <div className="PhoneWrapper">
        <div
          className="Phone"
          style={{
            position: 'fixed',
            transformOrigin: 'right bottom',
            transform: `scale(${settings.zoom.value}`,
            bottom,
          }}
        >
          <div
            className="PhoneFrame"
            style={{
              backgroundImage: `url(media/frames/${settings.frame.value})`,
            }}
          />
          <div
            id="phone"
            className="PhoneScreen bg-neutral-100 dark:bg-neutral-900"
            style={{
              backgroundImage: 'url(https://wallpapercat.com/w/full/1/b/b/130298-1080x1920-phone-1080p-grand-theft-auto-5-background-photo.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default PhoneWrapper;
