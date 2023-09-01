
import React from 'react'
import HeaderNav from '../components/HeaderNav'
import MainNav from '../components/MainNav'
import CategoriesCards from './components/CategoriesCards'
import Footer from '../components/Footer'
import ExploreSlider from './components/ExploreSlider'
import ExploreHero from './components/ExploreHero'
import ScrollTopBtn from '../components/ScrollTopBtn'

function page() {
  return (
    <main className='px-2 !overflow-hidden'>
    <HeaderNav/>
    <main className='max-lg:px-4 px-16 pb-10'>
    <ExploreHero  />
    <CategoriesCards/>
    <ExploreSlider type='sell' />
    <ExploreSlider type='rent' />
    </main>
    <ScrollTopBtn/>
    <Footer />
    <MainNav/>
    </main>
  )
}

export default page