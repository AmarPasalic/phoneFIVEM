import React from 'react';
import { SvgIconProps } from '@mui/material';

const CallCenterIcon: React.FC<SvgIconProps> = ({ ...props }) => {
    return (
        <img
            src="https://cdn.prodigyrp.net/phone/apps/callcenter.webp"
            alt="Call Center"
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
            }}
            {...props}
        />
    );
};

export default CallCenterIcon; 