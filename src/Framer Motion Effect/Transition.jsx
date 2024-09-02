import { motion } from "framer-motion";
import React from "react";

function Transition(Component) {
  return function TransitionWrapper(props) {
    return (
      <>
        <Component {...props} />
        <motion.div
          initial={{ y: "100vh" }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-screen h-screen bg-slate-500 absolute bottom-0 z-50 "
        />
      </>
    );
  };
}

export default Transition;
