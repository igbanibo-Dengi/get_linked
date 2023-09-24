import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/footer'
import { Suspense } from 'react'
import Loading from './loading'


const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'getlinked.ai',
  description: 'Get linked hackathon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='overflow-hidden'>
          {children}

          <Footer />

        </main>
      </body>
    </html>
  )
}
