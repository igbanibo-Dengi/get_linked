import Image from 'next/image'
import heroImg from '../public/assets/images/hero_img.png'
import ideaImg from '../public/assets/images/idea.png'
import guide from '../public/assets/images/guidelines.png'
import thinker from '../public/assets/images/thinker.png'
import chart from '../public/assets/images/chart.png'
import flare from '../public/assets/images/Purple-Lens-Flare-complete.png'
import { Button } from '@/components/ui/button'
import localFont from 'next/font/local'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const myFont = localFont({ src: '/fonts/myfont.ttf' })

import { Unica_One } from 'next/font/google'

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
                <h1 style={myFont.style} className=' indent-16 md:indent-0 pr-5 md:pr-0   md:leading-none text-4xl md:text-[42px] lg:text-[48px] xl:text-[80px]'>getlinkedTech <br /> Hackathon <span className='text-primary'>1.0</span></h1>
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
      {/* Introduction */}
      <section className='border-b border-gray-700 pt-10 md:pt-0 pb-10 md:pb-0'>
        <section className='container'>
          <div className='flex flex-col md:flex-row gap-10 md:gap-5'>
            <div className='flex-1 flex flex-col justify-center items-center md:p-10'>
              <Image
                src={ideaImg}
                width={500}
                height={500}
                alt='The big Idea'
              />
            </div>
            <div className='flex-1 flex flex-col justify-center text-center md:text-left md:p-10 gap-5'>
              <h1 style={myFont.style} className='leading-tight text-[20px] md:text-[32px]'>Introduction to getlinked<br />tech Hackathon<span className='text-primary'>1.0</span></h1>
              <p className='text-[13px] md:text-[14px]'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you're a coding genius, a
                design maverick, or a concept wizard, you'll have the chance to transform
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what we're all about!</p>
            </div>
          </div>
        </section>
      </section>
      {/* Rules and Guidelines */}
      <section className='border-b border-gray-700 pb-10 md:pb-0'>
        <section className='container'>
          <div className='flex flex-col md:flex-row-reverse'>
            <div className='flex-1 flex flex-col justify-center items-center'>
              <Image
                src={guide}
                width={500}
                height={500}
                alt='The big Idea'
              />
            </div>
            <div className='flex-1 flex flex-col justify-center text-center md:text-left md:pl-20 gap-5'>
              <h1 style={myFont.style} className='leading-tight text-[20px] md:text-[32px]'>Rules and<br />Guidelines<span className='text-primary'>1.0</span></h1>
              <p className='text-[13px] md:text-[14px]'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you're a coding genius, a
                design maverick, or a concept wizard, you'll have the chance to transform
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what we're all about!</p>
            </div>
          </div>
        </section>
      </section>
      {/* Judging Criteria and  key attributes */}
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
              <h1 style={myFont.style} className='leading-tight text-[20px] md:text-[32px]'>Judging Criteria <br /><span className='text-primary'>Key attributes</span></h1>
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
      {/* FAQs */}
      <section className='border-b border-gray-700 '>
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
              <h1 style={myFont.style} className='leading-tight text-[20px] md:text-[32px]'>Frequently Asked<br /><span className='text-primary'>Questions</span></h1>
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
      </section>
      {/* Timeline */}
      <section className='border-b border-gray-700 py-20'>
        <header className='text-center mb-10 md:mb-36'>
          <h1 style={myFont.style} className='text-[20px] md:text-[32px]'>Timeline</h1>
          <p className='text-[14px]'>Here is the breakdown of the time we anticipate
            using for the upcoming event.</p>
        </header>
        {/* for screens > 768px */}
        <main className='container hidden md:flex'>
          <div className='flex flex-1 items-end flex-col pt-[90px] text-right text-[12px] md:text-[14px]'>
            <div className='h-20 w-fit'>
              <h3 className='text-primary text-[24px] font-bold'>Hackathon Announcement</h3>
              <p>The getlinked tech hackathon 1.0 is formally announced <br />
                to the general public and teams begin to get ready to register</p>
            </div>
            <div className='h-20 w-fit mt-[115px]'>
              <h3 className='text-primary text-[24px] font-bold'>November 18, 2023</h3>
            </div>
            <div className='h-20 w-fit mt-[65px]'>
              <h3 className='text-primary text-[24px] font-bold'>Teams Registration ends</h3>
              <p>Interested Participants are no longer Allowed to <br />
                register</p>
            </div>
            <div className='h-20 w-fit mt-[115px]'>
              <h3 className='text-primary text-[24px] font-bold'>November 18, 2023</h3>
            </div>
            <div className='h-20 w-fit mt-[70px]'>
              <h3 className='text-primary text-[24px] font-bold'>Getlinked Hackathon 1.0 Offically Begins</h3>
              <p>Accepted teams can now proceed to build their <br />
                ground breaking skill driven solutions</p>
            </div>
            <div className='h-20 w-fit mt-[108px]'>
              <h3 className='text-primary text-[24px] font-bold'>November 18, 2023</h3>
            </div>
          </div>
          <div className='flex flex-col gap-16 w-fit mx-auto items-center justify-center'>
            <div> <hr className='rotate-90 w-28 border border-primary' /> </div>
            <Button size={'icon'}>1</Button>
            <div> <hr className='rotate-90 w-20 border border-primary' /> </div>
            <Button size={'icon'}>2</Button>
            <div> <hr className='rotate-90 w-20 border border-primary' /> </div>
            <Button size={'icon'}>3</Button>
            <div> <hr className='rotate-90 w-20 border border-primary' /> </div>
            <Button size={'icon'}>4</Button>
            <div> <hr className='rotate-90 w-20 border border-primary' /> </div>
            <Button size={'icon'}>5</Button>
            <div> <hr className='rotate-90 w-20 border border-primary' /> </div>
            <Button size={'icon'}>6</Button>
          </div>
          <div className='flex flex-1 items-start flex-col pt-[112px] text-left text-[12px] md:text-[14px]'>
            <div className='h-20 w-fit'>
              <h3 className='text-primary text-[24px] font-bold'>November 18, 2023</h3>
            </div>
            <div className='h-20 w-fit mt-[73px]'>
              <h3 className='text-primary text-[24px] font-bold'>Teams Registration begins</h3>
              <p>Interested teams can now show their interest in the <br />
                getlinked tech hackathon 1.0 2023 by proceeding to register</p>
            </div>
            <div className='h-20 w-fit mt-[108px]'>
              <h3 className='text-primary text-[24px] font-bold'>November 18, 2023</h3>
            </div>
            <div className='h-20 w-fit mt-[70px]'>
              <h3 className='text-primary text-[24px] font-bold'>Announcement of the accepted teams
                and ideas</h3>
              <p>All teams whom idea has been accepted into getlinked tech <br />
                hackathon 1.0 2023 are formally announced</p>
            </div>
            <div className='h-20 w-fit mt-[110px]'>
              <h3 className='text-primary text-[24px] font-bold'>November 18, 2023</h3>
            </div>
            <div className='h-20 w-fit mt-[75px]'>
              <h3 className='text-primary text-[24px] font-bold'>Demo Day</h3>
              <p>Teams get the opportunity to pitch their projects to judges. <br />
                The winner of the hackathon will also be announced on <br />
                this day</p>
            </div>
          </div>
        </main>
        {/* for screens < 768px*/}
        <main className='flex md:hidden '>
          <div className='flex flex-col pt-12 gap-10 w-[50px] items-center justify-center'>
            <div> <hr className='rotate-90 w-[90px] border border-primary' /> </div>
            <Button className='mb-3 mt-2' size={'iconSmall'}>1</Button>
            <div> <hr className='rotate-90 mt-5 w-20 border border-primary' /> </div>
            <Button className='mb-3 mt-1' size={'iconSmall'}>2</Button>
            <div> <hr className='rotate-90 mt-5 w-20 border border-primary' /> </div>
            <Button className='mb-3 mt-1' size={'iconSmall'}>3</Button>
            <div> <hr className='rotate-90 mt-5 w-24 border border-primary' /> </div>
            <Button className='mb-3 mt-5' size={'iconSmall'}>4</Button>
            <div> <hr className='rotate-90 mt-5 w-20 border border-primary' /> </div>
            <Button className='mb-3 mt-1' size={'iconSmall'}>5</Button>
            <div> <hr className='rotate-90 mt-5 w-20 border border-primary' /> </div>
            <Button className='mb-3 mt-1' size={'iconSmall'}>6</Button>
          </div>
          <section className='pr-5 flex flex-col'>
            <div className='flex flex-col text-[12px] justify-between h-[100px] max-w-[350px] mt-5'>
              <h3 className='text-primary font-bold'>Hackathon Announcement</h3>
              <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
              <h3 className='text-primary font-bold'>November 18, 2023</h3>
            </div>

            <div className='flex flex-col text-[12px] justify-between h-[100px] max-w-[350px] mt-[50px]'>
              <h3 className='text-primary font-bold'>Teams Registration begins</h3>
              <p>Interested teams can now show their interest
                in the getlinked tech hackathon 1.0 2023 by
                proceeding to register</p>
              <h3 className='text-primary font-bold'>November 18, 2023</h3>
            </div>

            <div className='flex flex-col text-[12px] justify-between h-[100px] max-w-[350px] mt-[55px]'>
              <h3 className='text-primary font-bold'>Teams Registration ends</h3>
              <p>Interested Participants are no longer Allowed
                to register</p>
              <h3 className='text-primary font-bold'>November 18, 2023</h3>
            </div>

            <div className='flex flex-col text-[12px] justify-between h-[100px] max-w-[350px] mt-[50px]'>
              <h3 className='text-primary font-bold'>Announcement of the accepted teams
                and ideas</h3>
              <p>All teams whom idea has been accepted into
                getlinked tech hackathon 1.0 2023 are formally
                announced</p>
              <h3 className='text-primary font-bold'>November 18, 2023</h3>
            </div>

            <div className='flex flex-col text-[12px] justify-between h-[100px] max-w-[350px] mt-[65px]'>
              <h3 className='text-primary font-bold'>Getlinked Hackathon 1.0 Offically Begins</h3>
              <p>Accepted teams can now proceed to build
                their ground breaking skill driven solutions</p>
              <h3 className='text-primary font-bold'>November 18, 2023</h3>
            </div>

            <div className='flex flex-col text-[12px] justify-between h-[100px] max-w-[350px] mt-[50px]'>
              <h3 className='text-primary font-bold'>Demo Day</h3>
              <p>Teams get the opportunity to pitch their
                projects to judges. The winner of the
                hackathon will also be announced on this day</p>
              <h3 className='text-primary font-bold'>November 18, 2023</h3>
            </div>
          </section>
        </main>
      </section>
      {/* Prizes and Rewards */}
      <section className='border-b border-gray-700 '>
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
              <h1 style={myFont.style} className='leading-tight text-[20px] md:text-[32px]'>Frequently Asked<br /><span className='text-primary'>Questions</span></h1>
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
      </section>
    </main>
  )
}
