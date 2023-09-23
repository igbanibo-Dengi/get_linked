import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import chart from '../public/assets/images/chart.png'
import flare from '../public/assets/images/Purple-Lens-Flare-complete.png'

import localFont from 'next/font/local'


const ClashDisplay = localFont({ src: '../app/fonts/ClashDisplay.ttf' })

const Criteria = () => {
  return (
    <section className='border-b border-gray-700 '>
      <section className='container py-16'>
        <div className='flex flex-col md:flex-row justify-center'>
          <div className='flex-1 flex flex-col justify-center items-center relative'>
            <Image
              src={chart}
              width={500}
              height={500}
              alt='The big Idea'
              className='z-10'
            />
            <Image
              src={flare}
              width={1000}
              height={1000}
              alt='purple flare'
              className='z-0 absolute md:bottom-32 -left-[60px] opacity-60 xl:-bottom-40 '
            />
          </div>
          <div className='flex-1 flex flex-col justify-center text-center md:text-left md:pl-20 gap-5 relative'>
            <h1 style={ClashDisplay.style} className='leading-[26px] md:leading-[42px] text-[20px] md:text-[32px]'>Judging Criteria <br /><span className='text-primary'>Key attributes</span></h1>
            <div className='flex flex-col gap-5 justify-center items-center md:items-start text-[12px] md:text-[14px] leading-[21px] md:leading-[27px]'>
              <p> <span className='text-[#FF26B9] font-bold'>Innovation and Creativity: </span>Evaluate the uniqueness and creativity of the
                solution. Consider whether it addresses a real-world problem in a novel
                way or introduces innovative features.</p>
              <p> <span className='text-[#FF26B9] font-bold'>Functionality: </span>Assess how well the solution works. Does it perform its
                intended functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.</p>
              <p> <span className='text-[#FF26B9] font-bold'>Impact and Relevance: </span>Determine the potential impact of the solution
                in the real world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential social,
                economic, or environmental benefits.</p>
              <p> <span className='text-[#FF26B9] font-bold'>Technical Complexity: </span>Evaluate the technical sophistication of the solution.
                Judges would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.</p>
              <p> <span className='text-[#FF26B9] font-bold'>Adherence to Hackathon Rules: </span>Judges will Ensure that the team adhered
                to the rules and guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other competition-specific requirements.</p>
              <div className='w-fit mt-5'>
                <Button size={'lg'}>Read More</Button>
              </div>
            </div>
            <Image
              src={flare}
              width={900}
              height={900}
              alt='purple flare'
              className='z-0 absolute -bottom-[50px] md:-bottom-[300px] -right-[180px] md:-right-[400px] opacity-60 '
            />
          </div>
        </div>
      </section>
    </section>
  )
}

export default Criteria