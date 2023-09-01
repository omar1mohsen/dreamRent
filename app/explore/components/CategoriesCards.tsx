import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import buyImgHome from '../../assets/images/buyImgHome.jpeg'
import rentImgHome from '../../assets/images/rentImgHome.jpeg'

function CategoriesCards() {
  const categories = [
    {
    title : 'Buy a home',
    description: 'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.',
    img : buyImgHome,
    btn: 'Browse homes',
    href:'/category/sell'
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
    <div className={`categories my-3 md:py-4`}>
    <div className='flex flex-wrap justify-center items-center'>
    {categories.map((category,index) =>{
            return(
              <div
              key={index} className='w-full sm:w-[90%] max-lg:mx-auto  lg:w-1/2 h-full p-2 overflow-hidden '>
                <Link href={category.href}>
                <div className="categoryHomeCard py-10 flex items-center max-sm:flex-wrap min-h-full  hover:scale-[1.02] transition-all duration-200 border-2 border-gray-300/70 hover:shadow-sm hover:shadow-[--sec-text-color] hover:border-blue-300/70 shadow-md shadow-gray-300  bg-[--main-text-color] rounded-lg  px-2 pr-6">
                  <Image src={category.img} alt="" width={100} height={100} className='w-4/12 max-sm:w-full lg:w-5/12 max-sm:mb-4  h-44 mx-auto' />
                  <div className="">
                  <h3 className='font-[600] mb-4  text-center sm:text-start lg:text-center text-2xl tracking-tight' >{category.title}</h3>
                  <p className=' mx-auto mb-4 sm:mx-0 lg:mx-auto text-center sm:text-start lg:text-center  text-gray-500'>{category.description}</p>
                  <button className='categoryhomeBtn mx-auto sm:mx-0 lg:mx-auto  rounded-lg transition-all duration-300 block py-3 px-8 border-2 border-[--sec-text-color] font-semibold text-[--sec-text-color]'>{category.btn}</button>
                  </div>
                </div>
                  </Link>
              </div>
            )
          })}
    </div>
</div>
  )
}

export default CategoriesCards