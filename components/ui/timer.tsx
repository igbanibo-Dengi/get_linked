import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown-simple';

const Timer = () => {
  // Function to calculate the target date 24 hours from now
  const calculateTargetDate = () => {
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 24);
    return targetDate.toISOString();
  };

  // State to store the target date
  const [targetDate, setTargetDate] = useState(() => {
    // Try to retrieve the target date from localStorage
    const storedTargetDate = localStorage.getItem('targetDate');
    if (storedTargetDate) {
      return storedTargetDate;
    } else {
      // If not found in localStorage, calculate and set a new target date
      const newTargetDate = calculateTargetDate();
      localStorage.setItem('targetDate', newTargetDate);
      return newTargetDate;
    }
  });

  // Update the target date in localStorage when the component mounts
  useEffect(() => {
    localStorage.setItem('targetDate', targetDate);
  }, [targetDate]);

  return (
    <div>
      <p className='text-[48px] md:text-[64px] text-white'>
        <span>
          <Countdown
            targetDate={targetDate}
            renderer={({ hours, minutes, seconds }) => (
              <div className='text-white'>
                {hours}<span className='text-base'>H</span> {minutes}<span className='text-base'>M</span> {seconds}<span className='text-base'>S</span>
              </div>
            )}
          />
        </span>
      </p>
    </div>
  );
};

export default Timer;
