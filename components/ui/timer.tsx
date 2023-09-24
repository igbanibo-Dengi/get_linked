'use client'

import React from 'react'
import Countdown from "react-countdown-simple";




import { Unica_One } from 'next/font/google'


const unica = Unica_One({
  weight: '400',
  subsets: ['latin'],
})

const Timer = () => {

  const duration = new Date(
    new Date().setHours(new Date().getHours() + 24)
  ).toISOString();

  return (
    <div>
      <p style={unica.style} className='text-[48px] md:text-[64px] text-white'>
        <span>
          <Countdown
            targetDate={duration}
            renderer={({ hours, minutes, seconds }) => (
              <div className='text-white'>
                {hours}<span className='text-base'>H</span> {minutes}<span className='text-base'>M</span> {seconds}<span className='text-base'>S</span>
              </div>
            )}
          />
        </span>
      </p>
    </div>
  )
}

export default Timer