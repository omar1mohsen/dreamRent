import React from 'react'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
import { MdHomeWork } from 'react-icons/md'
import { SiMicrosoftacademic , SiWorkplace } from 'react-icons/si'
import { v4 as uuidv4 } from 'uuid';

function ExpertiseSec() {
  return (
    <section className='py-8 px-2 sm:px-6 bg-black/90 rounded-2xl text-[--main-text-color] '>

        <div className="sec-header flex justify-between items-center mb-4">
        <h3 className='text-3xl mb-4 font-bold'>Expertise</h3>
        <BsFillArrowUpRightCircleFill className="w-10 h-10 text-[--sec-text-color]"  />
        </div>

        <div className="cards-box grid  gap-4 grid-cols-2 md:grid-cols-3  lg:grid-cols-4 justify-between items-center">
            
            <div key={uuidv4()} className="card-box px-4 over py-7 h-full rounded-xl border border-gray-300/40 shadow-md hover:bg-gray-400/40 transition duration-150 shadow-gray-400/40 hover:text-[--sec-text-color]">
                <h4 className='md:text-xl text-[--main-text-color] max-sm:text-center font-semibold'>Residental</h4>
                <FaHome className="w-12 h-12 max-sm:mx-auto my-4"  />
                <p className="mt-5 max-sm:text-center text-[--sec-color] max-sm:text-xs">Designing and building residental non-commercial properties and living spaces</p>
            </div>{/*card-box*/}
            
            <div key={uuidv4()} className="card-box px-4 over py-7  h-full rounded-xl border border-gray-300/40 shadow-md hover:bg-gray-400/40 transition duration-150 shadow-gray-400/40 hover:text-[--sec-text-color]">
                <h4 className='md:text-xl text-[--main-text-color] max-sm:text-center font-semibold'>Urban Desgin</h4>
                <MdHomeWork className="w-12 h-12 max-sm:mx-auto my-4"  />
                <p className="mt-5 max-sm:text-center text-[--sec-color] max-sm:text-xs">Arrangement,appearnce and function of our suburbs,towns and cities</p>
            </div>{/*card-box*/}
            
            <div key={uuidv4()} className="card-box px-4 over py-7 h-full rounded-xl border border-gray-300/40 shadow-md hover:bg-gray-400/40 transition duration-150 shadow-gray-400/40 hover:text-[--sec-text-color]">
                <h4 className='md:text-xl text-[--main-text-color] max-sm:text-center font-semibold'>Academic</h4>
                <SiMicrosoftacademic className="w-12 h-12 max-sm:mx-auto my-4"  />
                <p className="mt-5 max-sm:text-center text-[--sec-color] max-sm:text-xs">Connection between desgin elements and identitfy is most readily indentifable</p>
            </div>{/*card-box*/}
            
            <div key={uuidv4()} className="card-box px-4 over py-7 h-full rounded-xl border border-gray-300/40 shadow-md hover:bg-gray-400/40 transition duration-150 shadow-gray-400/40 hover:text-[--sec-text-color]">
                <h4 className='md:text-xl text-[--main-text-color] max-sm:text-center font-semibold'>Workplace</h4>
                <SiWorkplace className="w-12 h-12 max-sm:mx-auto my-4"  />
                <p className="mt-5 max-sm:text-center text-[--sec-color] max-sm:text-xs">Workplace area to optimize employee performance productivity , safety & health</p>
            </div>{/*card-box*/}

        </div> {/*cards-box*/}
        
    </section>
  )
}

export default ExpertiseSec