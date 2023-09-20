import Image from 'next/image'
import React from 'react'
import thinker from '../public/assets/images/thinker.png'
import localFont from 'next/font/local'

const ClashDisplay = localFont({ src: '../app/fonts/ClashDisplay.ttf' })

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const Faqs = () => {
  return (
    < section className='border-b border-gray-700 ' >
      <section className='container py-16'>
        <div className='flex flex-col-reverse md:flex-row-reverse  gap-10 md:gap-0 justify-center'>
          <div className='flex-1 flex flex-col justify-center items-center'>
            <Image
              src={thinker}
              width={500}
              height={500}
              alt='The big Idea'
            />
          </div>
          <div className='flex-1 flex flex-col justify-center text-center md:text-left md:pl-20 gap-5'>
            <h1 style={ClashDisplay.style} className='leading-tight text-[20px] md:text-[32px]'>Frequently Asked<br /><span className='text-primary'>Questions</span></h1>
            <p className='text-[12px] md:text-[14px]'>We got answers to the questions that you might want to ask about <span className='font-bold'>getlinked Hackathon 1.0</span></p>
            <div>
              <Accordion type="single" collapsible className="w-full text-[12px] md:text-[14px]">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Can I work on a project I started before the hackathon?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What happens if I need help during the hackathon?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What happens if I don't have an idea for a project?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I join a team or do I have to come with one?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What happens after the hackathon ends</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Can I work on a project I started before the hackathon?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>


          </div>
        </div>
      </section>
    </section >
  )
}

export default Faqs