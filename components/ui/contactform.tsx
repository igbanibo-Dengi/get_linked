import { Input } from './input'
import React from 'react'
import { Textarea } from './textarea'
import { Button } from './button'
import PurpleStar from '../purplestar/purpleStar'
import StarGif from '../starGif/stargif'

const Contactform = () => {
  return (
    <section className='relative'>
      <div className='z-20 absolute top-0 left-0  md:-left-20'>
        <PurpleStar />
      </div>
      <div className='z-20 absolute -bottom-16 left-36 md:left-[700px]'>
        <PurpleStar />
      </div>
      <div className='z-20 absolute md:top-10 top-56 right-32'>
        <StarGif />
      </div>
      <div className='z-20 absolute top-56 -right-20'>
        <StarGif />
      </div>
      <div className='flex flex-col gap-10 px-10 lg:px-20  py-20 bg-gray-500/5 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
        <h1 className='text-[20px] font-semibold text-primary'>Questions or need assistance? <br />
          Let us know about it
        </h1>
        <Input placeholder='First Name' className='placeholder:text-white' />
        <Input placeholder='Mail' className='placeholder:text-white' />
        <Textarea placeholder='Message' className='placeholder:text-white' />
        <Button size={'lg'} className='w-fit mx-auto px-10 py-6'>Submit</Button>
      </div>
    </section>

  )
}

export default Contactform