import Image from 'next/image'
import React from 'react'
import Gold from '../public/assets/images/gold_medal 1Gold.png'
import silver from '../public/assets/images/silver_medal 1.png'
import bronze from '../public/assets/images/bronze_medal 1.png'
import trophy from '../public/assets/images/trophy.png'

import localFont from 'next/font/local'

const ClashDisplay = localFont({ src: '../app/fonts/ClashDisplay.ttf' })



const Prizes = () => {
  return (
    < section className="border-b border-black md:pb-20 b bg-cover bg-[url('../public/assets/images/prize-bg-image-1.png')]" >
      <section className='container py-16 relative '>
        {/* <div className='hidden xl:block h-[800px] w-[3990px] -top-10 right-[395px] border-[3px] border-gray-950/80 absolute'></div>
        <div className='hidden xl:block h-[800px] w-[3990px] top-56 left-[1040px] border-[3px] border-gray-950/80 absolute'></div> */}

        {/* header for small screens */}
        <header className='text-center md:hidden'>
          <h1 style={ClashDisplay.style} className='text-[20px] md:text-[32px] leading-tight'>Prizes and <br /><span className='text-primary'>Rewards</span></h1>
          <p className='text-[14px]'>Highlight of the prizes or rewards for winners and for participants</p>
        </header>
        <div className='flex flex-col md:flex-row gap-36 md:gap-0'>
          <div className='flex flex-1 flex-col justify-center items-center'>
            <Image
              src={trophy}
              width={500}
              height={500}
              alt='The big Idea'
            />
          </div>
          <div className='flex-1 flex flex-col text-center md:text-left'>
            {/* header for large screens */}

            <header className='text-center md:text-left mb-44 mx-auto hidden md:block z-10'>
              <h1 style={ClashDisplay.style} className='text-[20px] md:text-[32px] leading-tight'>Prizes and <br /><span className='text-primary'>Rewards</span></h1>
              <p className='text-[14px]'>Highlight of the prizes or rewards for winners and <br /> for participants</p>
            </header>
            {/* for screens > 768px */}
            <div className='justify-center pr-10 gap-6 relative hidden xl:flex'>
              <div className='flex flex-col border border-primary justify-end rounded-[8px] h-[250px]  px-3 pb-5 pt-5 text-center bg-primary/20 font-bold items-center'>
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
              </div>
              <div className='flex flex-col border border-primary justify-end rounded-[8px] h-[300px]  px-3 pb-5 pt-5 text-center bg-[#903AFF]/20 font-bold items-center'>
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
              </div>
              <div className='flex flex-col border border-primary justify-end rounded-[8px] h-[250px]  px-3 pb-5 pt-5 text-center bg-primary/20 font-bold items-center'>
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
              </div>
            </div>
            {/* for screens < 768px */}
            <div className='justify-center gap-3 relative flex xl:hidden'>
              <div className='flex flex-col border border-primary justify-end rounded-[8px] h-[120px]  px-5 pb-5 text-center bg-primary/20 font-bold items-center'>
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
              </div>
              <div className='flex flex-col border border-primary justify-end rounded-[8px] h-[130px]  px-5 pb-5 text-center bg-[#903AFF]/20 font-bold items-center'>
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
              </div>
              <div className='flex flex-col border border-primary justify-end rounded-[8px] h-[120px]  px-5 pb-5 text-center bg-primary/20 font-bold items-center'>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </section >
  )
}

export default Prizes