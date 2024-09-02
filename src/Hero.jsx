import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Splittext from "./Framer Motion Effect/Splittext";
import { LiaGripLinesSolid } from "react-icons/lia";
import Marquee from "./Marquee";
import Menu1 from "./Menu1";

function Hero() {
  return (
    <>
      <div className="relative h-screen flex justify-center flex-col text-center">
        <motion.h1 className="text-[8vw]  font-bold font-serif w-auto">
          Tanmay Agarwal
        </motion.h1>
        <motion.h1 className="text-[2vw]  ClashDisplay-light  w-auto">
          <Splittext duration={1} delay={0.05}>
            Front End Developer
          </Splittext>
        </motion.h1>
        <Marquee />
      </div>
    </>
  );
}

export default Hero;
