import React from 'react'
import botttomImage from '../../assets/images/bottomHeroa.png'
import botttomImage2 from '../../assets/images/bottomHerob.png'
import botttomImage3 from '../../assets/images/bottomHeroc.png'
import botttomImage4 from '../../assets/images/bottomHerod.png'
import botttomImage5 from '../../assets/images/bottomHeroe.png'
import Image from 'next/image'
import { motion } from "framer-motion"

function BottomHero() {
  return (
    <motion.div 
    initial={{ opacity: 0 , y: "100%" }}
    animate={{ opacity: 1 , y : 0 }}
    transition={{duration : 1}}
    className='pt-16 pb-8 mb-4 -mt-4 rounded-3xl sm:px-2  shadow-md shadow-gray-400/40'>
      <motion.h3
          initial={{ opacity: 0 , y: "100%" }}
          animate={{ opacity: 1 , y : 0 }}
          transition={{duration : 1 , delay:0.3}}
      className='text-center w-full text-[--sec-color] capitalize text-xl font-semibold'>trusted by +20,000 companies</motion.h3>
      <motion.div
          initial={{ opacity: 0 , y: "100%" }}
          animate={{ opacity: 1 , y : 0 }}
          transition={{duration : 1 , delay:0.5}}
       className="flex flex-wrap justify-evenly items-center my-4">
      <Image src={botttomImage} alt='company' width={200} height={100} className=' max-md:mx-4 max-sm:w-[100px]  h-full' />
      <Image src={botttomImage2} alt='company' width={200} height={100} className=' max-md:mx-4 max-sm:w-[100px]  h-full' />
      <Image src={botttomImage3} alt='company' width={200} height={100} className=' max-md:mx-4 max-sm:w-[100px]  h-full' />
      <Image src={botttomImage4} alt='company' width={200} height={100} className=' max-md:mx-4 max-sm:w-[100px]  h-full' />
      <Image src={botttomImage5} alt='company' width={200} height={100} className='  max-md:mx-4 max-sm:w-[100px] h-full' />
      </motion.div>
    </motion.div>
  )
}

export default BottomHero