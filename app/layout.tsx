import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import question from './pictures/question.jpeg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'About Jia Wei',
  description: 'Personal Website',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { //can set theme here for html element (go to daisyui website to check)
  return (
    <html lang="en" > 

    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </head>
      <body className='${inter.className} bg-gradient-to-r from-slate-300 to-white'>{children}</body>
    </html>
  )
}
