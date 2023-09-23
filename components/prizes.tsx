import Image from 'next/image'
import React from 'react'
import Gold from '../public/assets/images/gold_medal 1Gold.png'
import silver from '../public/assets/images/silver_medal 1.png'
import bronze from '../public/assets/images/bronze_medal 1.png'
import trophy from '../public/assets/images/trophy.png'
import { motion } from 'framer-motion'


import localFont from 'next/font/local'
import StarGif from './starGif/stargif'
import PurpleStar from './purplestar/purpleStar'

const ClashDisplay = localFont({ src: '../app/fonts/ClashDisplay.ttf' })



const Prizes = () => {
  return (
    < section className="border-b bg-[#100B20] border-black md:pb-20 b bg-cover bg-[url('../public/assets/images/prize-bg-image-1.png')]" >
      <section className='container py-16 relative '>
        {/* header for small screens */}
        <header className='text-center md:hidden'>
          <h1 style={ClashDisplay.style} className='text-[20px] md:text-[32px] leading-[24px] md:leading-[39px]'>Prizes and <br /><span className='text-primary'>Rewards</span></h1>
          <p className='text-[14px]'>Highlight of the prizes or rewards for winners and for participants</p>
        </header>
        <div className='flex flex-col md:flex-row gap-36 md:gap-0'>
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0, }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className='flex flex-1 flex-col justify-center items-center relative'>
            <Image
              src={trophy}
              width={500}
              height={500}
              alt='The big Idea'
            />
            <div className='z-20 absolute -bottom-10 left-10'>
              {/* left-36 -bottom-10  */}
              <StarGif />
            </div>
            <div className='z-20 absolute -top-36 left-0 md:-top-10 md:left-20'>
              {/* left-36 -bottom-10  */}
              <PurpleStar />
            </div>
          </motion.div>
          <div className='flex-1 flex flex-col text-center md:text-left'>
            {/* header for large screens */}

            <header className='text-center md:text-left mb-44 mx-auto hidden md:block z-10'>
              <h1 style={ClashDisplay.style} className='text-[20px] md:text-[32px] leading-[39px]'>Prizes and <br /><span className='text-primary'>Rewards</span></h1>
              <p className='text-[14px]'>Highlight of the prizes or rewards for winners and <br /> for participants</p>
            </header>
            {/* for screens > 768px */}


            <div className=' justify-center pr-10 gap-6 relative hidden xl:flex'>

              {/* stars animation start */}

              <div className='z-20 absolute -top-[100px] right-10'>
                {/* top-10 left-1  */}
                <StarGif />
              </div>
              <div className='z-20 absolute -bottom-10 right-48'>
                {/* left-36 -bottom-10  */}
                <StarGif />
              </div>
              <div className='z-20 absolute -top-40 left-10'>
                {/* left-36 -bottom-10  */}
                <StarGif />
              </div>

              {/* stars animation end */}
              <motion.div
                initial={{ y: -150, opacity: 1 }}
                whileInView={{ opacity: 1, y: 0, }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className='flex flex-col border border-primary justify-end rounded-[8px] h-[250px]  px-3 pb-5 pt-5 text-center bg-primary/20 font-bold items-center'>
                <Image
                  src={silver}
                  width={150}
                  height={150}
                  alt='The big Idea'
                  className='absolute -top-20'
                />
                <p className='text-[36px]'>2nd</p>
                <p className='text-[24px] font-semibold'>Runner</p>
                <p className='text-primary text-[36px]'>N300,000</p>
              </motion.div>
              <motion.div
                initial={{ y: 150, opacity: 1 }}
                whileInView={{ opacity: 1, y: 0, }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className='flex flex-col border border-primary justify-end rounded-[8px] h-[300px]  px-3 pb-5 pt-5 text-center bg-[#903AFF]/20 font-bold items-center'>
                <Image
                  src={Gold}
                  width={280}
                  height={280}
                  alt='The big Idea'
                  className='absolute -top-36'
                />
                <p className='text-[36px]'>1st</p>
                <p className='text-[24px] font-semibold'>Runner</p>
                <p className='text-[#903AFF] text-[36px]'>N400,000</p>
              </motion.div>
              <motion.div
                initial={{ y: -150, opacity: 1 }}
                whileInView={{ opacity: 1, y: 0, }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className='flex flex-col border border-primary justify-end rounded-[8px] h-[250px]  px-3 pb-5 pt-5 text-center bg-primary/20 font-bold items-center'>
                <Image
                  src={bronze}
                  width={150}
                  height={150}
                  alt='The big Idea'
                  className='absolute -top-20'
                />
                <p className='text-[36px]'>3rd</p>
                <p className='text-[24px] font-semibold'>Runner</p>
                <p className='text-primary text-[36px]'>N150,000</p>
              </motion.div>
            </div>
            {/* for screens < 768px */}
            <div className='justify-center gap-3 relative flex xl:hidden'>

              {/* stars animation start */}

              <div className='z-20 absolute -top-[100px] right-10'>
                {/* top-10 left-1  */}
                <StarGif />
              </div>
              <div className='z-20 absolute -bottom-10 right-48'>
                {/* left-36 -bottom-10  */}
                <StarGif />
              </div>


              {/* stars animation end */}

              <motion.div
                initial={{ y: -150, opacity: 1 }}
                whileInView={{ opacity: 1, y: 0, }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className='flex flex-col border border-primary justify-end rounded-[8px] h-[120px]  px-5 pb-5 text-center bg-primary/20 font-bold items-center'>
                <Image
                  src={silver}
                  width={80}
                  height={80}
                  alt='The big Idea'
                  className='absolute -top-12'
                />
                <p className='text-[14px]'>2nd</p>
                <p className='text-[12px] font-semibold'>Runner</p>
                <p className='text-primary text-[12px]'>N300,000</p>
              </motion.div>
              <motion.div
                initial={{ y: 150, opacity: 1 }}
                whileInView={{ opacity: 1, y: 0, }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className='flex flex-col border border-primary justify-end rounded-[8px] h-[130px]  px-5 pb-5 text-center bg-[#903AFF]/20 font-bold items-center'>
                <Image
                  src={Gold}
                  width={140}
                  height={140}
                  alt='The big Idea'
                  className='absolute -top-24'
                />
                <p className='text-[14px]'>1st</p>
                <p className='text-[12px] font-semibold'>Runner</p>
                <p className='text-[#903AFF] text-[12px]'>N400,000</p>
              </motion.div>
              <motion.div
                initial={{ y: -150, opacity: 1 }}
                whileInView={{ opacity: 1, y: 0, }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className='flex flex-col border border-primary justify-end rounded-[8px] h-[120px]  px-5 pb-5 text-center bg-primary/20 font-bold items-center'>
                <Image
                  src={bronze}
                  width={80}
                  height={80}
                  alt='The big Idea'
                  className='absolute -top-12'
                />
                <p className='text-[14px]'>3rd</p>
                <p className='text-[12px] font-semibold'>Runner</p>
                <p className='text-primary text-[12px]'>N150,000</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </section >
  )
}

export default Prizes