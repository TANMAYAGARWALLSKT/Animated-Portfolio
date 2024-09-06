import React, { useEffect, useState } from "react";
import { delay, motion } from "framer-motion";

const FlipLink = ({ children, href }) => {
  const DURATION = 0.25;
  const STAGGER = 0.025;
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    if (isMobile) {
      const interval = setInterval(() => {
        setHovered((prev) => !prev);
      }, 1000); // Perform every 5 seconds

      return () => clearInterval(interval);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  // Define parent variants
  const parentVariants = {
    initial: {},
    hovered: {
      transition: {
        staggerChildren: STAGGER,
      },
    },
  };

  return (
    <motion.span
      initial="initial"
      animate={hovered ? "hovered" : "initial"}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      href={href}
      className="relative block overflow-hidden cursor-none whitespace-nowrap font-black uppercase"
      style={{
        lineHeight: 0.75,
      }}
    >
      <motion.div
        variants={parentVariants} // Apply staggered animation to child spans
      >
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-110%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        className="absolute inset-0 text-red-500"
        variants={parentVariants} // Apply staggered animation to child spans
      >
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "110%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </motion.div>
    </motion.span>
  );
};

export default FlipLink;
