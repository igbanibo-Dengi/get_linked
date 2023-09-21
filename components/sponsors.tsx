import React from 'react'
import image from '../public/assets/images/Partner and sponsors section.png'
import Image from 'next/image'
import StarGif from './starGif/stargif'
import PurpleStar from './purplestar/purpleStar'
import localFont from 'next/font/local'


const ClashDisplay = localFont({ src: '../app/fonts/ClashDisplay.ttf' })

const Sponsors = () => {
  return (
    <section className='border-b border-gray-700 '>
      <section className='container py-16'>
        <header className='text-center mb-10 max-w-[500px] mx-auto'>
          <h1 style={ClashDisplay.style} className='text-[20px] md:text-[36px] font-bold mb-2'>Partners and Sponsors</h1>
          <p className='text-[12px] md:text-[14px]'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
        </header>
        <div className=' relative'>
          <div className='z-20 absolute top-10 left-[700px]'>
            <PurpleStar />
          </div>
          <div className='z-20 absolute bottom-20 left-40 md:left-[700px]'>
            <StarGif />
          </div>
          <div className='z-20 absolute -top-20 left-20 md:left-40'>
            <PurpleStar />
          </div>
          <Image
            src={image}
            width={1000}
            height={1000}
            alt='The big Idea'
            className='mx-auto'
          />
        </div>
      </section>
    </section>
  )
}

export default Sponsors