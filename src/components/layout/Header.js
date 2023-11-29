import React from 'react'
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between">
          <nav className="flex gap-12 text-gray-500 font-semibold items-center">
          <Link className="text-blue-700 font-semibold text-2xl" href='/'>
            Mr. Cleansz
          </Link>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>About</Link>
            <Link href={''}>Contact</Link>
          </nav>

          <nav className='flex items-center gap-4 text-gray-500 font-semibold'>
            <Link href={'/login'}>Login</Link>
            <Link href={'/register'} className='bg-primary rounded-full text-white px-8 py-2'>Register</Link>
          </nav>
    </header> 
  )
}

export default Header