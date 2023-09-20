import Image from 'next/image'
import React from 'react'
import guide from '../public/assets/images/guidelines.png'

import localFont from 'next/font/local'

const ClashDisplay = localFont({ src: '../app/fonts/ClashDisplay.ttf' })

const Rules = () => {
  return (
    < section className='border-b border-gray-700 pb-10 md:pb-0' >
      <section className='container'>
        <div className='flex flex-col md:flex-row-reverse'>
          <div className='flex-1 flex flex-col justify-center items-center'>
            <Image
              src={guide}
              width={500}
              height={500}
              alt='The big Idea'
            />
          </div>
          <div className='flex-1 flex flex-col justify-center text-center md:text-left md:pl-20 gap-5'>
            <h1 style={ClashDisplay.style} className='leading-tight text-[20px] md:text-[32px]'>Rules and<br />Guidelines<span className='text-primary'>1.0</span></h1>
            <p className='text-[13px] md:text-[14px]'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
              clear as day: to shape the future. Whether you're a coding genius, a
              design maverick, or a concept wizard, you'll have the chance to transform
              your ideas into reality. Solving real-world problems, pushing the boundaries
              of technology, and creating solutions that can change the world,
              that's what we're all about!</p>
          </div>
        </div>
      </section>
    </section >
  )
}

export default Rules