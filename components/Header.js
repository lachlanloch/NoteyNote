import React from 'react'
import Link from 'next/link'
import Logout from './Logout'

export default function Header() {
  return (
    <div className='p-8 flex '>
        <Link href={"/"}>
        <h1 className='text-4xl textGradient'>NoteyNote</h1>
        </Link>
    <Logout/>
    </div>
  )
}
