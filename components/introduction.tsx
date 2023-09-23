import Image from 'next/image'
import React from 'react'
import ideaImg from '../public/assets/images/idea.png'
import PurpleStar from '../components/purplestar/purpleStar'

import localFont from 'next/font/local'

const ClashDisplay = localFont({ src: '../app/fonts/ClashDisplay.ttf' })

const Introduction = () => {
  return (
    < section className='overview border-b border-gray-700 pt-10 md:pt-0 pb-10 md:pb-0' >
      <section className='container'>
        <div className='flex flex-col md:flex-row gap-10 md:gap-5'>
          <div className='flex-1 flex flex-col justify-center items-center md:p-10 relative'>
            <Image
              src={ideaImg}
              width={500}
              height={500}
              alt='The big Idea'
            />
            <div className='absolute z-20 top-16 -left-5 md:top-40 md:left-5'>
              <PurpleStar />
            </div>
          </div>
          <div className='flex-1 flex flex-col justify-center text-center md:text-left md:p-10 gap-5 relative'>
            <h1 style={ClashDisplay.style} className='leading-[26px] md:leading-[42px] text-[20px] md:text-[26px] lg:text-[32px]'>Introduction to getlinked<br />tech Hackathon<span className='text-primary'>1.0</span></h1>
            <p className='max-w-[250px] sm:max-w-none mx-auto text-[13px] md:text-[14px] leading-[27px]'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
              clear as day: to shape the future. Whether you&apos;re a coding genius, a
              design maverick, or a concept wizard, you&apos;ll have the chance to transform
              your ideas into reality. Solving real-world problems, pushing the boundaries
              of technology, and creating solutions that can change the world,
              that&apos;s what we&apos;re all about!</p>
            <div className='absolute z-20 -top-1 -right-10 md:top-44 md:right-5'>
              <PurpleStar />
            </div>
          </div>
        </div>
      </section>
    </section >
  )
}

export default Introduction