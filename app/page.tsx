import Image from 'next/image'
import heroImg from '../public/assets/images/hero_img.png'
import flare from '../public/assets/images/Purple-Lens-Flare-complete.png'
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
import { Unica_One } from 'next/font/google'
const ClashDisplay = localFont({ src: '/fonts/ClashDisplay.ttf' })


const unica = Unica_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


export default function Home() {
  return (
    <main className=' text-white'>
      {/* Hero section */}
      <section className='border-b border-gray-700 '>
        <p className='text-base text-center italic font-bold z-10  md:hidden mb-10'>Igniting a Revolution in HR Innovation</p>

        <section className=' max-w-[1400px] mx-auto flex flex-col md:flex-row relative'>
          <Image
            src={flare}
            width={500}
            height={500}
            alt='purple flare'
            className='z-0 absolute -top-28 left-28 opacity-50 hidden md:block'
          />

          <div className='flex flex-col md:pl-10 text-center md:text-start flex-1 w-full justify-center items-center md:items-end'>
            <Image
              src={flare}
              width={700}
              height={700}
              alt='purple flare'
              className='z-0 absolute -top-24 -left-10 md:hidden'
            />
            <div className='flex flex-col gap-5 z-10 items-center md:items-start'>
              <div className=' font-bold'>
                <h1 style={ClashDisplay.style} className=' indent-16 md:indent-0 pr-5 md:pr-0   md:leading-none text-4xl md:text-[42px] lg:text-[48px] xl:text-[80px]'>getlinkedTech <br /> Hackathon <span className='text-primary'>1.0</span></h1>
              </div>
              <p className='hidden md:block'>Participate in getlinked tech Hackathon 2023 stand <br />
                a chance to win a Big prize</p>
              <p className='md:hidden'>Participate in getlinked tech Hackathon <br /> 2023 stand
                a chance to win a Big prize</p>
              <div className='w-fit'><Button size={'lg'}>Register</Button></div>
              <p style={unica.style} className='text-[48px] md:text-[64px]'>
                <span>
                  <p>00<span className='text-base'>H</span> 00<span className='text-base'>M</span> 00<span className='text-base'>S</span></p>
                </span>
              </p>
            </div>
          </div>
          <div className='flex-1 flex items-start flex-col justify-between relative overflow-hidden md:pt-10'>
            <p className='text-base xl:text-2xl italic font-bold hidden md:block'>Igniting a Revolution in HR Innovation</p>
            <Image
              src={heroImg}
              width={550}
              height={550}
              alt='hero image'
              className='z-10 mx-auto'
            />
            <Image
              src={flare}
              width={700}
              height={700}
              alt='purple flare'
              className='absolute -right-28 top-0 hidden md:block'
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
