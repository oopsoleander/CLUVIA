import React, { useState, useEffect } from 'react';

function Countdown({ targetDate }) {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);

    return (
        <div>
            {Object.keys(timeLeft).length > 0 ? (
                <div>
                    <h1>Countdown</h1>
                    <p>{timeLeft.days} Days</p>
                    <p>{timeLeft.hours} Hours</p>
                    <p>{timeLeft.minutes} Minutes</p>
                    <p>{timeLeft.seconds} Seconds</p>
                </div>
            ) : (
                <h1>Time's up!</h1>
            )}
        </div>
    );
}

export default Countdown;