"use client"
import ScrollTop from '../utilits/helpers/ScrollTop';
import React ,{useEffect} from 'react'

export default function ScrollTopBtn() {
    
useEffect(()=>{
  const scrollFunction = () => {
    const document = window.document;

      const mybutton = document.getElementById("btn-back-to-top") as HTMLElement;

      if (
        document.body.scrollTop > 25 ||
        document.documentElement.scrollTop > 25
      ) {
        mybutton?.classList.remove("hidden");
      } else {
        mybutton?.classList.add("hidden");
      }
    }
    window.addEventListener("scroll", scrollFunction);

},[])

      

  return (
<button
onClick={ScrollTop}
 type="button" className="!fixed hidden max-sm:bottom-24  bottom-5 right-5 z-[999]  rounded-[50%] bg-[--sec-text-color] p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-[--dark-blue] hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0" id="btn-back-to-top">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="h-4 w-4 animate-pulse" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z" />
  </svg>
</button>

  )
}