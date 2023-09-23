import React, { useState } from 'react'
import { Link } from "react-scroll";


const Links = () => {


  return (
    <div className='flex flex-col md:flex-row gap-10'>
      <Link to="timeline" className='cursor-pointer' spy={true} smooth={true} offset={0} duration={500}>Timeline</Link>
      <Link to="overview" className='cursor-pointer' spy={true} smooth={true} offset={0} duration={500} >Overview</Link>
      <Link to="faq" className='cursor-pointer' spy={true} smooth={true} offset={0} duration={500} >FAQs</Link>
    </div>
  )
}

export default Links