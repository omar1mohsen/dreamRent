import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

function ModalCloseBtn({handleClose}:{handleClose : any}) {
  return (
    <div onClick={handleClose}>
    <AiOutlineClose className="absolute top-3 right-5 w-7 h-7 font-bold cursor-pointer hover:text-[--red-text-color] transition" />
  </div>
  )
}

export default ModalCloseBtn