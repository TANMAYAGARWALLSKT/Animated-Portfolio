import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Splittext({ children, duration, delay, repeat }) {
  const [splitchildren, setSplitChildren] = useState([]);

  const easeSettings = {
    duration: duration,
    ease: "easeInOut",
    delay: delay, // Stagger the animation of each character
    repeat: repeat, // Repeat the animation if the string is longer than the splitted array length
  };

  useEffect(() => {
    if (typeof children === "string") {
      const splitText = children.split(""); // Splits the text into individual characters
      setSplitChildren(splitText);
    }
  }, [children]);

  return (
    <span className="assistant-text cursor-none ">
      {splitchildren.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ...easeSettings,

            delay: index * delay, // Stagger the animation of each character
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default Splittext;
