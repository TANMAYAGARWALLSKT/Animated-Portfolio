import React from "react";
import FlipLink from "./Framer Motion Effect/FlipLink";
import { BsTwitterX } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";

function Footer() {
  return (
    <div className=" bg-[#0a0908] mt-14 border-y-2 mb-10 border-white/50  text-[4vw] Satoshi flex  leading-tight    ">
      {/* <div className=" flex w-full flex-col ClashDisplay-Black text-[8vw] border-r-2">
        {" "}
        <span className=" leading-tighter hover:text-teal-400 text-7xl">
          {" "}
          Tanmay Agarwal
        </span>
        <span className="text-xl flex gap-2 ClashDisplay-Extralight leading-loose tracking-widest ">
          {" "}
          <span>Location</span>
          <span>:</span>
          <span>Jaipur,India</span>
        </span>
      </div> */}
      <div className="  flex   text-6xl w-screen   ">
        {" "}
        <div className="hover:text-red-500  border-r-2 w-1/4 flex flex-row gap-5  h-full items-center justify-center transition-all duration-300">
          <span> Gmail</span>
          <GoArrowUpRight className="inline-block    transition-transform transform hover:-translate-y-4 hover:translate-x-4" />
        </div>
        <div className="hover:text-blue-500  border-r-2 flex flex-row gap-5  w-1/4  h-full items-center justify-center transition-all duration-300">
          <span>LinkedIn</span>{" "}
          <GoArrowUpRight className="inline-block       transition-transform transform hover:-translate-y-4 hover:translate-x-4" />
        </div>
        <div className="hover:text-purple-500  flex flex-row gap-5  w-1/4  h-full items-center justify-center transition-all duration-300">
          <span> GitHub </span>
          <GoArrowUpRight className="inline-block   w-1/5  transition-transform transform hover:-translate-y-4 hover:translate-x-4" />
        </div>
        <div className="flex  w-1/4 flex-col border-l-2 text-center  text-5xl justify-center gap-5 py-5  h-full ">
          <FlipLink>My Resume</FlipLink>
          <FlipLink>About Me</FlipLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
