'use client'

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Revolution = () => {

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className='text-bold text-[16px] md:text-[14px] lg:text-[20px] xl:text-[26px]'>
      <Typewriter
        words={['Igniting a Revolution in HR Innovation']}
        loop={3}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
        onLoopDone={handleDone}
      // onType={handleType}
      />
    </div>
  );
};

export default Revolution;