import React from "react";
import { motion } from "framer-motion";

function OtherageTrantion() {
  const childrenConfig = [
    { color: "#f6cba3", yOffset: "10vh", duration: 2 },
    { color: "#18181b", yOffset: "20vh", duration: 2 },
    { color: "#f6cba3", yOffset: "30vh", duration: 2 },
    { color: "#18181b", yOffset: "40vh", duration: 2 },
  ];

  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: "-160vh", display: "none" }}
      transition={{ duration: 1.0, ease: [0.42, 0, 0.58, 1] }} // Smooth easing
      className="absolute top-0 left-0 z-[9999]   w-full "
    >
      <motion.div
        className="flex gap-5 flex-row  h-auto  "
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 1, // Increased stagger for smoother effect
            },
          },
        }}
      >
        {childrenConfig.map((child, index) => (
          <motion.div
            key={index}
            initial={{ y: "100vh" }}
            animate={{ y: child.yOffset }}
            transition={{
              duration: child.duration,
              ease: [0.42, 0, 0.58, 1], // Custom easing for smooth transition
            }}
            className="w-[25%] h-screen"
            style={{
              backgroundColor: child.color,
              willChange: "transform, opacity", // Optimize for smoother animations
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default OtherageTrantion;
