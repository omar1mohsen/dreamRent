import Image from 'next/image'
import React from 'react'
import buyImgHome from '../../assets/images/buyImgHome.jpeg'
import sellImgHome from '../../assets/images/sellImgHome.jpeg'
import rentImgHome from '../../assets/images/rentImgHome.jpeg'
import Link from 'next/link'

function CategoriesSec() {
  const categories = [
    {
    title : 'Buy a home',
    description: 'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.',
    img : buyImgHome,
    btn: 'Browse homes',
    href:'/category/sell'
  },
    {
    title : 'Sell a home',
    description: 'A real estate agent can provide you with a clear breakdown of costs so that you can avoid surprise expenses start seling.',
    img : sellImgHome,
    btn: 'Find a local agent',
    href:'/profile'
  },
    {
    title : 'Rent a home',
    description: 'We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.',
    img : rentImgHome,
    btn: 'Find rentals',
    href:'/category/rent'
  },
]
  return (
    <section className='py-8  bg-[--bg-color] px-2 ' >
        <h3 className='sec-title'>All Your Content, In One Place</h3>
        <p className='sec-pragrah'>Making it an ideal choice for renting a home</p>
        <div className='flex flex-wrap justify-center items-center my-4 lg:px-24'>
          {categories.map((category,index) =>{
            return(
              <div key={index} className='w-full sm:w-[90%]  lg:w-1/3 h-full p-2 px-4 '>
                <Link href={category.href}>
                <div className="categoryHomeCard py-10 max-lg:flex max-lg:items-center max-sm:flex-wrap min-h-full hover:scale-105 transition-all duration-200 border-2 border-gray-300/70 hover:shadow-lg shadow-md shadow-gray-300  bg-[--main-text-color] rounded-lg  px-4">
                  <Image src={category.img} alt="" width={100} height={100} className='w-full lg:w-full sm:w-5/12  h-44 mx-auto mb-10' />
                  <div className="">
                  <h3 className='font-[600]  text-center sm:text-start lg:text-center text-2xl tracking-tight' >{category.title}</h3>
                  <p className='lg:w-[80%] mx-auto sm:mx-0 lg:mx-auto text-center sm:text-start lg:text-center my-4 text-gray-500'>{category.description}</p>
                  <button className='categoryhomeBtn mx-auto sm:mx-0 lg:mx-auto lg:my-12 rounded-lg transition-all duration-300 block py-3 px-8 border-2 border-[--sec-text-color] font-semibold text-[--sec-text-color]'>{category.btn}</button>
                  </div>
                </div>
                  </Link>
              </div>
            )
          })}
        </div>
    </section>
  )
}

export default CategoriesSec