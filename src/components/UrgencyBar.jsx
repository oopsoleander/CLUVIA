import React from 'react';

const UrgencyBar = ({ spotsRemaining }) => {
    return (
        <div style={{ width: '100%', height: '20px', backgroundColor: '#f00', position: 'relative' }}>
            <div style={{ width: `${(spotsRemaining / 100) * 100}%`, height: '100%', backgroundColor: '#0f0' }} />
            <span style={{ position: 'absolute', top: '0', right: '5px', color: '#fff' }}>{spotsRemaining} spots remaining</span>
        </div>
    );
};

export default UrgencyBar;