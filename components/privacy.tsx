import React from 'react'
import privacyImg from '../public/assets/images/privacy.png'
import Image from 'next/image'
import localFont from 'next/font/local'
import check from '../public/assets/icons/check.png'
import { Button } from './ui/button'


const ClashDisplay = localFont({ src: '../app/fonts/ClashDisplay.ttf' })

const Privacy = () => {
  return (
    <section className='border-b border-gray-700 '>
      <section className='container py-16'>

        <div className='flex flex-col lg:flex-row gap-10 lg:gap-0'>
          <div className='flex-1 flex flex-col justify-between'>
            <header className='text-center md:text-left max-w-[500px] mx-auto md:pt-10'>
              <h1 style={ClashDisplay.style} className='text-[20px] md:text-[36px] font-bold mb-2'>Privacy Policy and <br /><span className='text-primary'>Terms</span></h1>
              <p className='text-[12px] md:text-[14px] mt-3'>Last updated on September 12, 2023</p>
              <p className='text-[12px] md:text-[14px] mt-3 leading-relaxed'>Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant</p>
            </header>
            <article className='flex flex-col p-5 sm:px-10 py-16 border border-primary rounded bg-primary/5 gap-10 mt-10 max-w-[500px] mx-auto'>
              <p className='text-[12px] md:text-[14px] leading-relaxed'>At getlinked tech Hackathon 1.0, we value your privacy
                and are committed to protecting your personal information.
                This Privacy Policy outlines how we collect, use, disclose,
                and safeguard your data when you participate in our tech
                hackathon event. By participating in our event, you consent
                to the practices described in this policy.</p>
              <h2 className='text-primary font-bold text-[13px] md:text-[16px]'>Licensing Policy</h2>
              <p className='text-[12px] md:text-[14px] font-bold'>Here are terms of our Standard License:</p>

              <div className='flex gap-2'>
                <span>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                    <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
                  </svg>

                </span>
                <p className='text-[12px] md:text-[14px] leaading-relaxed'>The Standard License grants you a non-exclusive right to
                  navigate and register for our event</p>
              </div>
              <div className='flex gap-2'>
                <span>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                    <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
                  </svg>

                </span>
                <p className='text-[12px] md:text-[14px] leading-relaxed'>The Standard License grants you a non-exclusive right to
                  navigate and register for our event</p>
              </div>
              <Button size={'lg'} className='w-fit mx-auto'>Read More</Button>
            </article>
          </div>
          <div className='flex-1 flex justify-center items-center'>
            <Image
              src={privacyImg}
              width={600}
              height={600}
              alt='The big Idea'
            />
          </div>
        </div>
      </section>
    </section >
  )
}

export default Privacy