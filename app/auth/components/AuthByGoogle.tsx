import { UserAuth } from '@/app/context/AuthContext'
import Image from 'next/image'
import React from 'react'

function AuthByGoogle({type}:{type : string}) {
  const {singInByGoogle} = UserAuth()
  // handle text 
  const handleText = ()=>{
    if(type === "login"){
      return "Login"
      }else{
        return "SignUp"
      }
  }
  return (
<div className='my-1 border-b-2 border-black/20 py-4'>
  <button onClick={singInByGoogle} className="group h-12 px-6 mx-auto block border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
    <div className="relative flex items-center space-x-4 justify-center">
      <Image src="https://tailus.io/sources/blocks/social/preview/images/google.svg" width={5} height={5} className=" w-5" alt="google logo" />
      <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">{handleText()} with Google</span>
    </div>
  </button>
  </div>

  )
}

export default AuthByGoogle