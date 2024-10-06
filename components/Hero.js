import React from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import CallToAction from './CallToAction'
import DummyData from './DummyData'

export default function Hero() {


  return (
    <div className='flex flex-col  text-center max-w-[1000px] '>
            <h1 className='text-4xl sm:text-5xl md:text-6xl  my-2 sm:my-4 md:my-6 lg:my-8'><span className='textGradient'>NoteyNote</span> lets you add <span className='textGradient'>notes</span> to your <span className='textGradient'>dashboard</span> and delete them as you wish!</h1>
            <p className='text-3xl sm:text-4xl md:text-5xl  my-4 sm:my-6 md:my-8 lg:my-10'>Keep track of all that you need and access it from your pc or mobile!</p>
            <CallToAction/>

            <DummyData/>

    </div>
  )
}
