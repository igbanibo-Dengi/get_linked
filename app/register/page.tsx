import Image from 'next/image'
import React from 'react'
import PageImage from '../../public/assets/images/Group 7.png'
import Walk from '../../public/assets/images/walking.png'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// Font imports 
import localFont from 'next/font/local'
const ClashDisplay = localFont({ src: '../fonts/ClashDisplay.ttf' })

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import PurpleStar from '@/components/purplestar/purpleStar'
import StarGif from '@/components/starGif/stargif'

const page = () => {
  return (
    <main className='container text-white py-5'>
      <h1 style={ClashDisplay.style} className='lg:hidden text-primary text-[20px] md:text-[32px]'>Register</h1>

      <div className='flex flex-col lg:flex-row'>
        <div className='flex-1 flex justify-center items-center'>
          <Image
            src={PageImage}
            width={600}
            height={600}
            alt='register Image'
          />
        </div>
        <section className='relative flex-1 sm:p-5 md:p-10 md:m-10 sm:bg-gray-500/5 rounded-[12px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>


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
            <h1 style={ClashDisplay.style} className='hidden lg:block text-primary text-[20px] md:text-[32px]'>Register</h1>
            <span className='flex mt-3'>
              <p className='py-5 text-[12px]'>Be part of this movement!</p>
            </span>
            <p className='text-[16px] md:text-[24px]'>CREATE YOUR ACCOUNT</p>
          </header>

          <form action="">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-10 mt-10'>
              <div>
                <Label htmlFor="Email">Team&apos;s Name</Label>
                <Input placeholder='Enter the name of your group' type='text' />
              </div>
              <div>
                <Label htmlFor="Phone">Phone</Label>
                <Input placeholder='Enter your phone number' type='phone' />
              </div>
              <div>
                <Label htmlFor="Email">Email</Label>
                <Input placeholder='Enter your email address' type='email' />
              </div>
              <div>
                <Label htmlFor="Email">Project Topic</Label>
                <Input placeholder='What is your group project topic' type='text' />
              </div>
            </div>
            <div className='col-span-2 grid grid-cols-3 md:grid-cols-2 gap-2 sm:gap-10 mt-10'>
              <div className='col-span-2 md:col-span-1'>
                <Label htmlFor="Email">Category</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>categories</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>


              <div className='col-span-1'>
                <Label htmlFor="Email">Group size</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Pick a number</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <p className='text-xs text-primary italic mt-3'>Please review your registration details before submitting</p>
            <div className="flex items-center space-x-2 mt-5">
              <Checkbox id="terms2" />
              <label
                htmlFor="terms2"
                className="text-[10px] sm:text-[12px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agreed with the event terms and conditions and privacy policy
              </label>
            </div>

            <div className='w-fit mx-auto md:w-full mt-10'>
              <Button size={'lg'} className='w-full'>Register Now</Button>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}

export default page