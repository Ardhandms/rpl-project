import React from 'react'
import Link from "next/link";
import Loginicon from '../icon/Loginicon';

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-blue-700 font-semibold text-2xl" href=''>
        Mr. Cleansz
      </Link>
          <nav className="flex gap-12 text-gray-500 font-semibold items-center">
            <Link href={'/'}>Home</Link>
            <Link href={''}>About</Link>
            <Link href={''}>Contact</Link>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <Loginicon className='w-8 h-4' />
              Login
            </button>
          </nav>
    </header> 
  )
}

export default Header