import React from "react";
import FlipLink from "./Framer Motion Effect/FlipLink";
import { GoArrowUpRight } from "react-icons/go";

function Footer() {
  return (
    <div className="bg-[#0a0908] mt-14 border-y-2 mb-10 border-white/50 text-[5vw] md:text-[2.5vw] lg:text-[1.5vw] Satoshi flex flex-col md:flex-row flex-wrap leading-tight">
      <div className="flex text-[8vw] md:text-[4vw] lg:text-[2.5vw] w-full md:w-screen flex-wrap mx-auto ">
        <div className="hover:text-red-500  border-r-2 w-full mx-auto md:w-1/4 flex flex-row gap-5 h-full  transition-all duration-300">
          <span className="mx-auto my-auto ">
            Gmail{" "}
            <GoArrowUpRight className="inline-block mx-auto transition-transform transform hover:-translate-y-4 hover:translate-x-4" />
          </span>
        </div>
        <div className="hover:text-purple-500  border-r-2  w-full md:w-1/4 flex flex-row gap-5 mx-auto h-full  transition-all duration-300">
          <span
            className="
          mx-auto my-auto"
          >
            GitHub{" "}
            <GoArrowUpRight className="inline-block w-1/5 transition-transform transform hover:-translate-y-4 hover:translate-x-4" />
          </span>
        </div>
        <div className="hover:text-blue-500  w-full mx-auto md:w-1/4 flex flex-row gap-5 h-full  transition-all duration-300">
          <span
            className="
          mx-auto my-auto"
          >
            LinkedIn{" "}
            <GoArrowUpRight className="inline-block transition-transform transform hover:-translate-y-4 hover:translate-x-4" />
          </span>
        </div>

        <div className="flex w-full md:w-1/4 flex-col border-l-2 gap-4  mx-auto  h-full">
          <span className="mx-auto my-auto">
            <span className="mx-auto my-auto">
              <FlipLink>About Me</FlipLink>
            </span>{" "}
            <FlipLink>My Resume</FlipLink>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
