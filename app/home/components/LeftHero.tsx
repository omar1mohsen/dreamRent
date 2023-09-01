import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import heroImg from "../../assets/images/hero-icon.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
function LeftHero() {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="left-side w-full px-2 py-8 rounded-xl  lg:w-1/2 ps-4 md:pe-2 bg-[--bg-color]"
    >
      <h1 className="max-sm:text-xl text-2xl lg:text-4xl flex flex-col font-semibold overflow-hidden leading-6">
        <motion.span
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center my-1 "
        >
          {" "}
          BUY{" "}
          <Image
            src={heroImg}
            width={50}
            height={50}
            className="w-10 h-10 mx-1 rounded-[50%]"
            alt="hero image"
          />{" "}
          RENT OR SELL{" "}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-bold flex my-1 items-center "
        >
          YOUR{" "}
          <CiLocationArrow1 className="mx-1 text-[--sec-text-color] w-10 h-10" />{" "}
          PROPERTY
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, y: "50%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="p-2 bg-white my-1 rounded-2xl w-fit font-semibold"
        >
          EASILY
        </motion.span>{" "}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="my-8  text-[--sec-color] tracking-wider capitalize"
      >
        A great platform to buy,sell or even rent your <br className="max-sm:hidden" /> properties without
        any commissions{" "}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="stats w-full flex space-x-2 sm:space-x-5 items-center"
      >
        <p className="flex items-center space-x-2">
          <span className="text-3xl lg:text-5xl font-bold text-[--sec-text-color]">
            2.5K
          </span>
          <span className=" text-[--sec-color]  lg:text-lg   text-sm leading-tight">
            Properties <br /> sold
          </span>
        </p>
        <p className="flex items-center space-x-2">
          <span className="text-3xl lg:text-5xl font-bold text-[--sec-text-color]">
            8M
          </span>
          <span className="text-[--sec-color]  lg:text-lg  text-sm leading-tight">
            Satisficed <br />
            and HAPPY User
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
}

export default LeftHero;
