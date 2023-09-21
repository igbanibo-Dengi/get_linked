import Image from 'next/image'
import heroImg from '../public/assets/images/hero_img.png'
import bulb from '../public/assets/images/bulb.png'
import chain from '../public/assets/images/chain.png'
import flare from '../public/assets/images/Purple-Lens-Flare-complete.png'
import StarGif from '../components/starGif/stargif'
import Starcluster from '../components/starcluster/cluster'
import FlickerGif from '../components/flicker/flicker'
import { Button } from '@/components/ui/button'

// components imports 
import Introduction from '@/components/introduction'
import Rules from '@/components/rules'
import Criteria from '@/components/criteria'
import Faqs from '@/components/faqs'
import Timeline from '@/components/timeline'
import Prizes from '@/components/prizes'
import Sponsors from '@/components/sponsors'
import Privacy from '@/components/privacy'



// Fonts import
import localFont from 'next/font/local'
import Revolution from '@/components/ui/revolution'
import Timer from '@/components/ui/timer/timer'
const ClashDisplay = localFont({ src: '/fonts/ClashDisplay.ttf' })





export default function Home() {
  return (
    <main className=' text-white'>
      {/* Hero section */}
      <section className="border-b border-gray-700 bg-contain ">
        <div className='flex flex-col items-end w-fit mx-auto md:hidden py-10'>
          <Revolution />
          <svg width="155" height="12" viewBox="0 0 255 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" stroke-width="5" />
          </svg>
        </div>

        <section className="max-w-[1400px] mx-auto flex flex-col md:flex-row relative md:pt-8 xl:pt-0 bg-contain bg-[url('../public/assets/images/matrix.png')] ">
          <Image
            src={flare}
            width={500}
            height={500}
            alt='purple flare'
            className='z-0 absolute -top-28 left-28 opacity-50 hidden md:block'
          />


          {/* stars gif start  */}
          <div className='absolute top-10 left-40'>
            <StarGif />
          </div>
          <div className='absolute bottom-[180px] left-[500px]'>
            <StarGif />
          </div>
          {/* stars gif end  */}


          <div className='flex flex-col md:pl-10 text-center md:text-end flex-1 w-full justify-center items-center md:items-end'>
            <Image
              src={flare}
              width={700}
              height={700}
              alt='purple flare'
              className='z-0 absolute -top-24 -left-10 md:hidden'
            />
            <div className='flex flex-col gap-5 z-10 justify-center items-center  md:items-start'>
              <div className=' font-bold relative'>
                <Image
                  src={bulb}
                  width={30}
                  height={30}
                  alt='bulb'
                  className='absolute  xl:-top-6 xl:right-[140px] lg:-top-7 lg:right-[125px] md:-top-7 md:right-16 -top-8 right-9'
                />
                <h1 style={ClashDisplay.style} className=' text-left indent-16 md:indent-0 pr-5 md:pr-0 md:leading-none text-4xl md:text-[38px] lg:text-[46px] xl:text-[60px]'>getlinkedTech </h1>
                <div className='flex'>
                  <h1 style={ClashDisplay.style} className='indent-5 md:indent-0 md:leading-none text-4xl md:text-[38px] lg:text-[46px] xl:text-[60px]'> Hackathon <span className='text-primary'>1.0</span></h1>
                  <Image
                    src={chain}
                    width={120}
                    height={120}
                    alt='purple flare'
                    className='hidden lg:block'
                  />
                  <Image
                    src={chain}
                    width={60}
                    height={60}
                    alt='purple flare'
                    className=' lg:hidden'
                  />
                </div>
              </div>
              <p className='text-[13px] lg:text-[20px]'>Participate in getlinked tech Hackathon 2023 stand <br /> a chance to win a Big prize</p>

              <div className='w-fit'><Button size={'lg'}>Register</Button></div>
              <Timer />
            </div>
          </div>
          <div className='flex-1 flex items-start flex-col justify-between relative overflow-hidden md:pt-10'>
            <div className='hidden md:flex items-end w-fit flex-col'>
              <Revolution />
              <svg width="220" height="17" viewBox="0 0 255 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" stroke-width="5" />
              </svg>
            </div>

            <div className='absolute top-32 left-20'>
              <StarGif />
            </div>

            <div className='absolute top-32 left-20'>
              <Starcluster />
            </div>
            <div className='absolute top-56 right-32'>
              <Starcluster />
            </div>
            <div className='absolute top-[300px] left-0 z-20'>
              <FlickerGif />
            </div>


            {/* background flare images */}
            <Image
              src={heroImg}
              width={550}
              height={550}
              alt='hero image'
              className='z-10'
            />
            <Image
              src={flare}
              width={550}
              height={550}
              alt='purple flare'
              className='absolute left-[98px] top-0 hidden md:block'
            />
          </div>
        </section>

      </section>
      <Introduction />
      <Rules />
      <Criteria />
      <Faqs />
      <Timeline />
      <Prizes />
      <Sponsors />
      <Privacy />
    </main>
  )
}
