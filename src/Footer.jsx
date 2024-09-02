import React from "react";
import FlipLink from "./Framer Motion Effect/FlipLink";
import { BsTwitterX } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";

function Footer() {
  return (
    <div className="w-screen bg-[#0a0908] mt-14 border-y-2 border-white/50  text-[4vw] Satoshi flex  leading-tight  justify-between ">
      <div className=" flex w-full flex-col ClashDisplay-Black text-[8vw] border-r-2">
        {" "}
        <span className=" leading-tighter hover:text-teal-400">
          {" "}
          Tanmay Agarwal
        </span>
        <span className="text-xl flex gap-2 ClashDisplay-Extralight leading-loose tracking-widest ">
          {" "}
          <span>Location</span>
          <span>:</span>
          <span>Jaipur,India</span>
        </span>
      </div>
      <div className="  flex  flex-col w-full pl-10 ">
        {" "}
        <div className="hover:text-red-500 relative w-80 flex flex-row gap-5    transition-all duration-300">
          Gmail
          <GoArrowUpRight className="inline-block     transition-transform transform hover:-translate-y-4 hover:translate-x-4" />
        </div>
        {/* <FlipLink>Facebook</FlipLink> */}
        {/* <FlipLink>Instagram</FlipLink> */}
        <div className="hover:text-blue-500 relative w-80   transition-all duration-300">
          LinkedIn{" "}
          <GoArrowUpRight className="inline-block     transition-transform transform hover:-translate-y-4 hover:translate-x-4" />
        </div>
        <div className="hover:text-purple-500 relative   transition-all duration-300">
          GitHub
          <GoArrowUpRight className="inline-block     transition-transform transform hover:-translate-y-4 hover:translate-x-4" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
