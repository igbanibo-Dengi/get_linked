import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import chart from '../public/assets/images/chart.png'
import localFont from 'next/font/local'


const ClashDisplay = localFont({ src: '../app/fonts/ClashDisplay.ttf' })

const Criteria = () => {
  return (
    <section className='border-b border-gray-700 '>
      <section className='container py-16'>
        <div className='flex flex-col md:flex-row justify-center'>
          <div className='flex-1 flex flex-col justify-center items-center'>
            <Image
              src={chart}
              width={500}
              height={500}
              alt='The big Idea'
            />
          </div>
          <div className='flex-1 flex flex-col justify-center text-center md:text-left md:pl-20 gap-5'>
            <h1 style={ClashDisplay.style} className='leading-tight text-[20px] md:text-[32px]'>Judging Criteria <br /><span className='text-primary'>Key attributes</span></h1>
            <div className='flex flex-col gap-5 justify-center items-center md:items-start text-[12px] md:text-[14px]'>
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
          </div>
        </div>
      </section>
    </section>
  )
}

export default Criteria