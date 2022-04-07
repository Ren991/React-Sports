import React, {useState, useEffect} from 'react'
import {getRemainingTimeUntilMsTimestamp} from './countDownTimerUtils'
 
const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
}

const Counter = ({countDownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
      const intervalId = setInterval(() => {
        updateRemainingTime(countDownTimestampMs);
      }, 1000);
      return () => clearTimeout(intervalId)
    
    }, [countDownTimestampMs])
    
    
    function updateRemainingTime(countDown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countDown))
    }
  return (
    <>
    <span>{remainingTime.days}</span>
    <span>Days</span>
    <span>{remainingTime.hours}</span>
    <span>Hours</span>
    <span>{remainingTime.minutes}</span>
    <span>Minutes</span>
    <span>{remainingTime.seconds}</span>
    <span>Seconds</span>
    </>
  );
};

export default Counter;
