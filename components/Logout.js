'use client'
import React from 'react'

import { useAuth } from '@/context/AuthContext'
import { usePathname } from 'next/navigation'

export default function Logout() {
    const { logout, currentUser } = useAuth()
    const pathname = usePathname()

    if (!currentUser) {
        return 
    }

    return (
        <button className='text-xl border border-gray-300 p-2 rounded-2xl text-red-400 hover:text-red-600 hover:border-black ml-auto ' onClick={logout}>Logout</button> 
    )
}