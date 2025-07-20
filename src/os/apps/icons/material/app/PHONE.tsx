import React from 'react';
import { SvgIconProps } from '@mui/material';

const PhoneIcon: React.FC<SvgIconProps> = ({ ...props }) => {
  return (
    <img
      src="https://cdn.prodigyrp.net/phone/apps/phone.webp"
      alt="Phone"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      }}
      {...props}
    />
  );
};

export default PhoneIcon; 