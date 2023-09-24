'use client'

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Revolution = () => {

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className='text-bold text-[16px] md:text-[14px] lg:text-[20px] xl:text-[30px] italic'>
      <Typewriter
        words={['Igniting a Revolution in HR Innovation']}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={50}
        deleteSpeed={50}
        delaySpeed={4000}
        onLoopDone={handleDone}
      />
    </div>
  );
};

export default Revolution;