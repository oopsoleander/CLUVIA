import React, { useEffect, useState } from 'react';

const VisitorSimulator = () => {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisitorCount(prevCount => prevCount + Math.floor(Math.random() * 5)); // Random increase between 0 to 4
        }, 1000); // update every second

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Live Visitor Counter</h1>
            <p>Current Visitors: {visitorCount}</p>
        </div>
    );
};

export default VisitorSimulator;