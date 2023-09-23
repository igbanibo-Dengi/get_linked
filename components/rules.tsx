import Image from 'next/image'
import React from 'react'
import guide from '../public/assets/images/guidelines.png'
import flare from '../public/assets/images/Purple-Lens-Flare-complete.png'


import localFont from 'next/font/local'
import StarGif from './starGif/stargif'

const ClashDisplay = localFont({ src: '../app/fonts/ClashDisplay.ttf' })

const Rules = () => {
  return (
    < section className='border-b border-gray-700 pb-10 md:pb-0' >
      <section className='container'>
        <div className='flex flex-col md:flex-row-reverse'>
          <div className=' relative flex-1 flex flex-col justify-center items-center'>
            <Image
              src={guide}
              width={500}
              height={500}
              alt='The big Idea'
              className='z-20'
            />
            <Image
              src={flare}
              width={1000}
              height={1000}
              alt='purple flare'
              className='z-0 absolute -top-[100px] -left-28  md:top-32 md:left-[250px] lg:left-[300px] xl:left-[400px] opacity-60 '
            />
          </div>
          <div className='relative flex-1 flex flex-col justify-center z-20 text-center md:text-left md:pl-20 gap-5'>
            <h1 style={ClashDisplay.style} className='leading-[26px] md:leading-[39px] text-[20px] md:text-[32px]'>Rules and <br /><span className='text-primary'>Guidelines</span></h1>
            <p className='text-[13px] md:text-[14px] leading-[27px]'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
              clear as day: to shape the future. Whether you&apos;re a coding genius, a
              design maverick, or a concept wizard, you'll have the chance to transform
              your ideas into reality. Solving real-world problems, pushing the boundaries
              of technology, and creating solutions that can change the world,
              that&apos;s what we're all about!</p>
            <div className='absolute top-10 right-0 lg:top-32 lg:right-56'>
              {/* top-10 left-1  */}
              <StarGif />
            </div>
            <div className='absolute -bottom-10  sm:bottom-0 lg:bottom-20  md:right-10'>
              {/* left-36 -bottom-10  */}
              <StarGif />
            </div>
            <Image
              src={flare}
              width={1000}
              height={1000}
              alt='purple flare'
              className='z-0 absolute -right-[200px] -top-36 md:-top-32 md:left-1 opacity-60'
            />
          </div>
        </div>
      </section>
    </section >
  )
}

export default Rules