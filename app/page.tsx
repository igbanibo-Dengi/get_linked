'use client'


// components imports 
import Introduction from '@/components/introduction'
import Rules from '@/components/rules'
import Criteria from '@/components/criteria'
import Faqs from '@/components/faqs'
import Timeline from '@/components/timeline'
import Prizes from '@/components/prizes'
import Sponsors from '@/components/sponsors'
import Privacy from '@/components/privacy'
import NavBar from '@/components/navigation/nav'
import Hero from '@/components/hero'


export default function Home() {
  return (
    <main className=' text-white '>
      <NavBar />
      <Hero />
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
