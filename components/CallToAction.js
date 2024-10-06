'use client'

import React from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

export default function CallToAction() {

    const {currentUser} = useAuth()

    if (currentUser){
        return(
            <div className='mx-auto min-w-[300px] sm:min-w-[500px] lg:min-w-[600px]  hover:border-black my-4 sm:my-6 md:my-8 lg:my-10 border rounded-2xl'>
                <Link href={'/dashboard'}>
            <h1 className='p-4 textGradient sm:text-xl lg:text-2xl'>Go to Dashboard</h1>
                </Link>
            </div>
        )
    }
  return (
    <div className='grid grid-cols-2 gap-4 w-fit mx-auto my-4 sm:my-6 md:my-8 lg:my-10'>
        <Link href={'/dashboard'}>
                <button className='border rounded-3xl p-3 min-w-[150px] sm:min-w-[200px] lg:min-w-[400px]  text-xl md:text-2xl lg:text-3xl hover:border-black'>
                    <h1 className='textGradient'>Sign Up</h1>
                </button>
        </Link>

        <Link href={'/dashboard'}>
            <button className='border rounded-3xl p-3 min-w-[150px] sm:min-w-[200px] lg:min-w-[400px] text-xl md:text-2xl lg:text-3xl hover:border-black'>
                <h1 className='textGradient'>Login</h1>
            </button>
        </Link>

    </div>
    
  )
}

