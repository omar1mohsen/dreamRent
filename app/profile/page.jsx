import React from 'react'
import HeaderNav from '../components/HeaderNav'
import MainNav from '../components/MainNav'
import MainProfile from './components/MainProfile'

function page() {
  return (
    <main className='px-2 overflow-hidden'>
    <HeaderNav/>
    <MainProfile />
    <MainNav/>
    </main>
  )
}

export default page