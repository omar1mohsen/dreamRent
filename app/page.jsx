import React from 'react'
import MainNav from './components/MainNav'
import Footer from './components/Footer'
import Testimonials from './home/components/Testimonials'
import CategoriesSec from './home/components/CategoriesSec'
import ExpertiseSec from './home/components/ExpertiseSec'
import Hero from './home/components/Hero'
import ScrollTopBtn from './components/ScrollTopBtn'
import HeaderNav from './components/HeaderNav'

function page() {
  return (
    <main className='px-2 overflow-hidden'>
    <HeaderNav/>
    <ScrollTopBtn />
    <Hero/>
    <ExpertiseSec />
    <CategoriesSec />
    <Testimonials />
    <Footer />
    <MainNav/>
    </main>
  )
}

export default page