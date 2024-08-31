import React from "react";
import { motion } from "framer-motion";
import { LiaTimesSolid } from "react-icons/lia";
import MyCanvasComponent from "./Threejs/MyCanvasComponent";
import FlipLink from "./Framer Motion Effect/FlipLink";
import { Link } from "react-router-dom";
import { Howl } from "howler";

function Menu1({ change }) {
  const menuOptions = [
    { Navlink: "/", Header: "Home" },
    { Navlink: "/Project", Header: "Project" },
    { Navlink: "/About Me", Header: "About Me" },
    { Navlink: "/Download CV", Header: "Download CV" },
  ];

  const CloseIt = () => {
    change(false);
  };

  const sound = new Howl({
    src: ["whoosh-cinematic.mp3"],
    loop: false,
    volume: 1,
  });
  const Click = new Howl({
    src: ["interface.mp3"],
    loop: false,
    volume: 1,
  });

  return (
    <motion.div
      className="flex justify-between"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {/* 3D Canvas Component */}
      <div className="w-[75vw] overflow-hidden p-2 rounded-xl flex justify-center">
        <MyCanvasComponent />
      </div>

      {/* Menu Options */}
      <div className="text-4xl flex flex-col justify-center items-end pr-10 h-screen w-[35vw] gap-10">
        {menuOptions.map((item, index) => (
          <motion.span
            onClick={() => {
              CloseIt();
              sound.play();
            }}
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Link to={item.Navlink}>
              <FlipLink>{item.Header}</FlipLink>
            </Link>
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default Menu1;
