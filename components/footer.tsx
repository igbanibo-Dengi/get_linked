import React from 'react'
import localFont from 'next/font/local'
import Link from 'next/link'
import { Separator } from './ui/separator'
import { RiTwitterXLine } from 'react-icons/ri'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { TiLocation } from 'react-icons/ti'
import StarGif from './starGif/stargif'
import PurpleStar from './purplestar/purpleStar'

const ClashDisplay = localFont({ src: '../app/fonts/ClashDisplay.ttf' })

const Footer = () => {
  return (
    <footer className=' bg-[#100B20] text-white py-10 md:p-20'>
      <div className='relative container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>


        <div className='z-20 absolute top-0 left-0  md:-left-20'>
          <PurpleStar />
        </div>
        <div className='z-20 absolute -bottom-16 left-36 md:left-[700px]'>
          <PurpleStar />
        </div>
        <div className='z-20 absolute md:top-10 top-56 right-32'>
          <StarGif />
        </div>

        <div className='flex flex-col justify-between lg:col-span-2 '>
          <div className='max-w-[500px]'>
            <Link style={ClashDisplay.style} href="/" className="text-base md:text-4xl font-extrabold">
              get<span className="text-primary">linked</span>
            </Link>
            <p className='text-[12px] md:text-[14px] leading-relaxed mt-5' >Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology</p>
          </div>
          <div className='flex gap-3 mt-10 lg:mt-0'>
            <p>Terms of Use</p> <Separator orientation='vertical' /><p>Privacy Policy</p>
          </div>
        </div>

        <div className='flex flex-col text-[12px] gap-5 md:pl-8 '>
          <h1 className='text-[14px] text-primary font-bold'>Useful Links</h1>
          <Link className='hover:text-primary' href='/'>Overview</Link>
          <Link className='hover:text-primary' href='/'>Timeline</Link>
          <Link className='hover:text-primary' href='/'>FAQs</Link>
          <Link className='hover:text-primary' href='/'>Register</Link>
          <div className='flex text-[24px] gap-4 items-center'>
            <p className='text-primary text-[12px]'>Follow us</p>
            <Link className='hover:text-primary' href='/'><FaInstagram /></Link>
            <Link className='hover:text-primary' href='/'><RiTwitterXLine /></Link>
            <Link className='hover:text-primary' href='/'><FaFacebookF /></Link>
            <Link className='hover:text-primary' href='/'><FaLinkedinIn /></Link>
          </div>
        </div>
        <div className='flex flex-col text-[12px] gap-5'>
          <h1 className='text-[14px] text-primary font-bold'>Contact Us</h1>
          <div className='flex gap-5 items-center'>
            <div className='text-[24px]'><BiSolidPhoneCall /></div>
            <p className='text-[12px] md:text-[14px] leading-relaxed' >+234 6707653444</p>
          </div>
          <div className='flex gap-5'>
            <div className='text-[24px]'><TiLocation /></div>
            <p className='text-[12px] md:text-[14px] leading-relaxed' >27,Alara Street<br />
              Yaba 100012<br />
              Lagos State</p>
          </div>
        </div>
      </div>
      <p className='text-[12px] mx-auto text-center mt-16'>All rights reserved. © getlinked Ltd.</p>
    </footer>
  )
}

export default Footer