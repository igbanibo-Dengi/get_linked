import Contactform from '@/components/ui/contactform'
import React from 'react'


import { RiTwitterXLine } from 'react-icons/ri'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineLeft } from 'react-icons/ai'

import localFont from 'next/font/local'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import PurpleStar from '@/components/purplestar/purpleStar'
import StarGif from '@/components/starGif/stargif'
import Mobileform from '@/components/mobileform'
import NavBar from '@/components/navigation/nav'
import Image from 'next/image'
import flare from '../../public/assets/images/Purple-Lens-Flare-complete.png'


const ClashDisplay = localFont({ src: '../../app/fonts/ClashDisplay.ttf' })

const page = () => {
  return (
    <main className='text-white'>

      <NavBar />
      <div className='container pt-20 md:pt-0'>
        <section className=' hidden sm:flex flex-row justify-around py-16 relative'>


          <Image
            src={flare}
            width={1000}
            height={1000}
            alt='purple flare'
            className='-z-20 absolute  md:-top-[200px] -left-20 md:-left-[500px] opacity-50 '
          />
          <div className='sm:w-[40%] flex flex-col gap-5 lg:pl-20  lg:pr-20 mt-14'>
            <h1 style={ClashDisplay.style} className='text-primary text-[20px] md:text-[32px]'>Get in touch</h1>
            <p className='text-[16px]'>Contact <br />Information</p>
            <p className='text-[16px]'>27,Alara Street<br />Yaba 100012 <br />Lagos State</p>
            <p className='text-[16px]'>Call Us : 07067981819</p>
            <p className='text-[16px]'>we are open from Monday-Friday <br />08:00am - 05:00pm</p>
            <p className='text-primary text-[16px]'>Share on</p>
            <div className='flex text-[24px] gap-4 items-center'>
              <Link className='hover:text-primary' href='/'><FaInstagram /></Link>
              <Link className='hover:text-primary' href='/'><RiTwitterXLine /></Link>
              <Link className='hover:text-primary' href='/'><FaFacebookF /></Link>
              <Link className='hover:text-primary' href='/'><FaLinkedinIn /></Link>
            </div>
          </div>
          <div className='p-1 w-[60%] relative'>
            <Image
              src={flare}
              width={1000}
              height={1000}
              alt='purple flare'
              className='-z-10 absolute -bottom-[100px] md:-bottom-[200px] -right-[200px] md:-right-[400px] opacity-50 '
            />
            <Contactform />
          </div>
        </section>
        <section className='flex flex-col sm:hidden '>

          <Image
            src={flare}
            width={1000}
            height={1000}
            alt='purple flare'
            className='-z-20 absolute  md:-top-[200px] -left-20 md:-left-[500px] opacity-50 '
          />

          <div className='z-10 absolute top-0 left-14'>
            <PurpleStar />
          </div>
          <div className='z-10 absolute bottom-16 left-36'>
            <PurpleStar />
          </div>
          <div className='z-10 absolute top-56 right-10'>
            <StarGif />
          </div>
          <div className='z-10 absolute top-[100px] right-0'>
            <StarGif />
          </div>

          <header className='pt-10'>
            <Link href='/' className='z-20'>
              <Button size={'icon'} variant={'round'} className='bg-transparent flex justify-center items-center'>
                <span className='h-9 w-9 bg-background rounded-full flex justify-center items-center'><AiOutlineLeft /></span>
              </Button>
            </Link>
            <h1 className='pt-10 text-[20px] font-semibold text-primary'>Questions or need assistance? <br />
              Let us know about it
            </h1>
            <p className='text-[12px] mt-5 font-extralight'>Email us below to any question related <br />
              to our event</p>
          </header>
          <Mobileform />
          <div className='flex flex-col items-center py-5'>
            <p className='text-primary text-center text-[12px]'>Share on</p>
            <div className='flex text-[24px] gap-4 items-center'>
              <Link className='hover:text-primary' href='/'><FaInstagram /></Link>
              <Link className='hover:text-primary' href='/'><RiTwitterXLine /></Link>
              <Link className='hover:text-primary' href='/'><FaFacebookF /></Link>
              <Link className='hover:text-primary' href='/'><FaLinkedinIn /></Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default page