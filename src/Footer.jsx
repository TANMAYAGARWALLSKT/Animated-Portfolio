import React from "react";
import FlipLink from "./Framer Motion Effect/FlipLink";
import { GoArrowUpRight } from "react-icons/go";

function Footer() {
  return (
    <div className="bg-[#0a0908] mt-14 border-y-2 mb-10 border-white/50 text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] Satoshi flex flex-col md:flex-row flex-wrap leading-tight">
      <div className="flex text-[8vw] md:text-[4vw] lg:text-[2.5vw] w-full md:w-screen flex-wrap ">
        <div className="hover:text-red-500 border-r-2 w-full md:w-1/4 flex flex-row gap-5 h-full items-center justify-center transition-all duration-300">
          <span>Gmail</span>
          <GoArrowUpRight className="inline-block transition-transform transform hover:-translate-y-4 hover:translate-x-4" />
        </div>
        <div className="hover:text-blue-500 border-r-2 w-full md:w-1/4 flex flex-row gap-5 h-full items-center justify-center transition-all duration-300">
          <span>LinkedIn</span>
          <GoArrowUpRight className="inline-block transition-transform transform hover:-translate-y-4 hover:translate-x-4" />
        </div>
        <div className="hover:text-purple-500 w-full md:w-1/4 flex flex-row gap-5 h-full items-center justify-center transition-all duration-300">
          <span>GitHub</span>
          <GoArrowUpRight className="inline-block w-1/5 transition-transform transform hover:-translate-y-4 hover:translate-x-4" />
        </div>
        <div className="flex w-full md:w-1/4 flex-col border-l-2 text-center justify-center gap-5 py-5 h-full">
          <FlipLink>My Resume</FlipLink>
          <FlipLink>About Me</FlipLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
