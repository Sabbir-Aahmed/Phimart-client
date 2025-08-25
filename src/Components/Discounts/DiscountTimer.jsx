import React, { useEffect, useState } from 'react';

const DiscountTimer = () => {
    const targetDate = new Date().getTime() + 1000 * 60 * 60 * 24 * 25

    const getaTimeRemaining = () => {
        const now = new Date().getTime()
        const difference = targetDate - now

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference/ (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference/ (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        }
    }

    const [timeLeft, setTimeLeft] = useState(getaTimeRemaining())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getaTimeRemaining())
        }, 1000)

        return () => clearInterval(timer)
    },[])

    return (
        <div className="flex justify-center md:justify-start space-x-6 md:space-x-8 text-2xl font-semibold my-6">
            
            <div>
                <span className="text-3xl text-pink-500">{timeLeft.days}</span><br />
                Days
            </div>
            <div>
                <span className="text-3xl text-pink-500">{timeLeft.hours}</span><br />
                Hrs
            </div>
            <div>
                <span className="text-3xl text-pink-500">{timeLeft.minutes}</span><br />
                Min
            </div>
            <div>
                <span className="text-3xl text-pink-500">{timeLeft.seconds}</span><br />
                Sec
            </div>
        </div>
    );
};

export default DiscountTimer;