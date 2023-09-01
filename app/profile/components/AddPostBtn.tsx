import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { showCreateModal  } from "@/app/store/showmodel/ShowSlice";
import { showUpdateModal  } from "@/app/store/showmodel/ShowUpdate";
import { BsFillSignpost2Fill } from "react-icons/bs";

function AddPostBtn() {
    const dispatch = useDispatch()


  return (
    <div className="my-2 py-5 px-3 md:px-36 bg-white rounded-lg">
      <button 
      onClick={()=>{ dispatch(showCreateModal())}}
      className="px-2 py-3 bg-[--bg-color] rounded-lg w-full font-bold capitalize text-lg text-[--sec-text-color] hover:bg-[--sec-color] hover:text-[--main-text-color] transition flex justify-between items-center">
       <AiFillHome className="ms-3 w-6 h-6"/>
        sell or rent your home
        <MdOutlineKeyboardArrowRight className="me-3 w-6 h-6"/>
      </button>
      <button 
        onClick={()=>{ dispatch(showUpdateModal())}}
      className="px-2 py-3 bg-[--bg-color] mt-4 rounded-lg w-full font-bold capitalize text-lg text-[--sec-text-color] hover:bg-[--sec-color] hover:text-[--main-text-color] transition flex justify-between items-center">
       <BsFillSignpost2Fill className="ms-3 w-6 h-6"/>
        display my all Listings posts
        <MdOutlineKeyboardArrowRight className="me-3 w-6 h-6"/>
      </button>
    </div>
  );
}

export default AddPostBtn;
