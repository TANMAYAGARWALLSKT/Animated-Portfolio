import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { GiSteamLocomotive } from "react-icons/gi";
import { SiGreensock } from "react-icons/si";
import { PiFramerLogo } from "react-icons/pi";

function Marquee() {
  const Tech = useRef(null);
  const [Techwidth, setTechStack] = useState(0);

  const techStackItems = [
    { component: <FaHtml5 className="h-[8vw]" />, key: "html5" },
    { component: <FaCss3 className="h-[8vw]" />, key: "css3" },
    { component: <FaJs className="h-[8vw]" />, key: "js" },
    { component: <FaReact className="h-[8vw]" />, key: "react" },
    { component: <RiTailwindCssFill className="h-[8vw]" />, key: "tailwind" },
    { component: <GiSteamLocomotive className="h-[8vw]" />, key: "locomotive" },
    { component: <SiGreensock className="h-[8vw]" />, key: "greensock" },
    {
      component: <img className="h-[8vw]" src="/lenis svg.svg" />,
      key: "lenis",
    },
    { component: <PiFramerLogo className="h-[8vw]" />, key: "Framers" },
    { component: <FaHtml5 className="h-[8vw]" />, key: "html51" },
    { component: <FaCss3 className="h-[8vw]" />, key: "css32" },
    { component: <FaJs className="h-[8vw]" />, key: "js2" },
    { component: <FaReact className="h-[8vw]" />, key: "reac2t" },
    { component: <RiTailwindCssFill className="h-[8vw]" />, key: "tailwind2" },
    { component: <GiSteamLocomotive className="h-[8vw]" />, key: "locomotive2" },
    { component: <SiGreensock className="h-[8vw]" />, key: "greensock2" },
    {
      component: <img className="h-[8vw]" src="/lenis svg.svg" />,
      key: "lenis2",
    },
    { component: <PiFramerLogo className="h-[8vw]" />, key: "Framers2" },
  ];

  useEffect(() => {
    if (Tech.current) {
      setTechStack(Tech.current.scrollWidth);
    }
  }, []);

  const marqueeVariants = {
    animate: (width) => ({
      x: [0, -width],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: width / 100, // Dynamic duration for consistent speed
          ease: "linear",
        },
      },
    }),
  };

  return (
    <div className="absolute bottom-10 flex flex-col justify-start text-[#ffc79336] w-full">
      <motion.div
        ref={Tech}
        className="h-auto w-auto luckiest-guy text-[10vw] flex gap-[5vw]"
        variants={marqueeVariants}
        animate="animate"
        custom={Techwidth}
      >
        {techStackItems.map((item) => (
          <motion.span
            className="h-auto w-auto hover:scale-110 transition-transform duration-300 ease-in-out hover:text-[#f6cba3]"
            key={item.key}
          >
            {item.component}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
