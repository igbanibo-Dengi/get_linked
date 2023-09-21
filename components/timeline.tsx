import React from 'react'
import { Button } from './ui/button'
import localFont from 'next/font/local'

const ClashDisplay = localFont({ src: '../app/fonts/ClashDisplay.ttf' })



const Timeline = () => {
  return (
    <section className='border-b border-black pt-20 pb-32'>
      <header className='text-center mb-10 md:mb-36'>
        <h1 style={ClashDisplay.style} className='text-[20px] md:text-[32px]'>Timeline</h1>
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
  )
}

export default Timeline




