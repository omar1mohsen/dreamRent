import Link from 'next/link'
import React from 'react'
import { TfiWorld } from 'react-icons/tfi'

function LogoNav() {
  return (
    <nav className='w-fit  py-1 z-50 px-3 mb-2 mt-3 bg-[--bg-color] rounded-xl fixed bottom-0 left-1 md:bottom-5 md:left-5'>
    <div className="logo flex justify-center items-center space-x-1">
    <div className="icon w-10 h-10  p-1 rounded-lg bg-black/70 flex justify-center items-center">
       <TfiWorld  className=" h-7 w-7 text-slate-200/80"/>
    </div>
      <Link href='/'><span className='font-bold text-xl cursor-pointer'>DREAMRENT</span></Link> 
    </div>
</nav>
  )
}

export default LogoNav