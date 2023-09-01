"use client";
import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { UserAuth } from "../context/AuthContext";
import Image from "next/image";
import profileIcon from "../assets/profileIcon.jpg";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";

export default function AuthBtn() {
  const { user , logOut } = UserAuth();

  // logOut Funcation 
  const logOutFuncation =  ()=> {
     logOut()
  }

  return (
    <>
      {!user ? (
        <Link
          href={"/auth/signup"}
          className="py-1 px-5 flex justify-center items-center space-x-1 rounded-lg bg-white cursor-pointer text-[--sec-text-color] hover:bg-gray-200 transition duration-300"
        >
          <BsPerson className="w-full font-semibold  h-full border-r-2 mr-1 pr-1" />
          <span className="text-sm max-sm:text-xs tracking-[1.1px] font-semibold">SIGNUP</span>
        </Link>
      ) : (
        <div
        onClick={logOutFuncation}
          className="py-1 px-5 flex justify-center items-center space-x-1 rounded-lg bg-white cursor-pointer text-[--sec-text-color] hover:bg-gray-200 transition duration-300"
        >
          <BiLogOut className="w-full font-semibold  h-full border-r-2 mr-1 pr-1" />
          <span className="text-sm max-sm:text-xs tracking-[1.1px] font-semibold">LOGOUT</span>
        </div>
      )}
    </>
  );
}
