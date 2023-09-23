
'use client'

import Image from 'next/image'
import React from 'react';
import PageImage from '../../public/assets/images/Group 7.png'
import mlk from '../../public/assets/images/Group 4.png'
import NavBar from '@/components/navigation/nav'
import { motion } from 'framer-motion';
import flare from '../../public/assets/images/Purple-Lens-Flare-complete.png'



// Font imports 
import localFont from 'next/font/local'
const ClashDisplay = localFont({ src: '../fonts/ClashDisplay.ttf' })


import PurpleStar from '@/components/purplestar/purpleStar'
import StarGif from '@/components/starGif/stargif'
import RegistrationForm from '@/components/registerationform';

const page = () => {
  return (
    <section className=' text-white'>
      <NavBar />



      <main className='container pt-20 md:pt-10 py-10 '>
        <h1 style={ClashDisplay.style} className='lg:hidden text-primary text-[20px] md:text-[32px]'>Register</h1>

        <div className='flex flex-col lg:flex-row relative'>

          <Image
            src={flare}
            width={1000}
            height={1000}
            alt='purple flare'
            className='-z-20 absolute  md:-top-[200px] -left-20 md:-left-[300px] opacity-50 '
          />


          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0, }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className='flex-1 flex justify-center items-center'>
            <Image
              src={PageImage}
              width={600}
              height={600}
              alt='register Image'
              className=''
            />
          </motion.div>
          <section className='relative flex-1 sm:p-5 md:p-10 md:mr-5 sm:bg-gray-500/5 rounded-[12px] bg-clip-padding  bg-opacity-10'>


            <Image
              src={flare}
              width={1000}
              height={1000}
              alt='purple flare'
              className='-z-10 absolute -bottom-[100px] md:-bottom-[200px] -right-[200px] md:-right-[400px] opacity-50 '
            />


            <div className=' absolute top-0 left-0  md:-left-20'>
              <PurpleStar />
            </div>
            <div className=' absolute -bottom-16 left-36 md:left-[700px]'>
              <PurpleStar />
            </div>
            <div className=' absolute md:top-10 top-56 right-32'>
              <StarGif />
            </div>
            <div className=' absolute top-56 -right-20'>
              <StarGif />
            </div>
            <header>
              <h1 style={ClashDisplay.style} className='hidden font-bold lg:block text-primary text-[20px] md:text-[32px]'>Register</h1>
              <span className='flex gap-3 mt-3'>
                <p className='justify-self-end place-self-end text-[12px] md:text-[14px]'>Be part of this movement!</p>
                <Image
                  src={mlk}
                  alt='dfg'
                  className='border-b border-primary border-dashed'
                />
              </span>
              <p className='text-[16px] md:text-[24px] mt-2 mb-6 md:mb-10'>CREATE YOUR ACCOUNT</p>
            </header>
            <div className='z-50'>
              <RegistrationForm />
            </div>
          </section>
        </div>
      </main>
    </section>
  )
}

export default page


