import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Howl } from "howler";
import FlipLink from "./Framer Motion Effect/FlipLink";

// Lazy load MyCanvasComponent
const MyCanvasComponent = React.lazy(() =>
  import("./Threejs/MyCanvasComponent")
);

function Menu1({ change }) {
  const menuOptions = [
    { Navlink: "/", Header: "Home" },
    { Navlink: "/Project", Header: "Project" },
    { Navlink: "/AboutMe", Header: "About Me" },
    { Navlink: "/Resume", Header: "Download CV" },
  ];

  let sound, click;

  React.useEffect(() => {
    sound = new Howl({
      src: ["whoosh-cinematic.mp3"],
      loop: false,
      volume: 0.5,
    });
    click = new Howl({
      src: ["interface.mp3"],
      loop: false,
      volume: 0.5,
    });

    return () => {
      sound.unload();
      click.unload();
    };
  }, []);

  const handleMenuClick = (navlink) => {
    change(false);
    sound.play();
  };

  return (
    <motion.div className="relative min-h-screen bg-black overflow-hidden blur-my">
      <motion.div className="sticky top-0 left-0 h-screen w-full flex flex-col lg:flex-row items-center justify-between">
        {/* 3D Canvas Component */}
        <div className="p-2  flex justify-center w-[100vw]  h-[100vh] lg:relative md:relative sm:absolute flex-wrap top-0 left-0">
          <Suspense
            fallback={
              <div className="flex justify-center text-center ClashDisplay-bold text-white">
                Loading...
              </div>
            }
          >
            <MyCanvasComponent />
          </Suspense>
        </div>

        {/* Menu Options */}
        <div className="flex flex-col justify-center lg:justify-end items-end lg:items-end pr-10 lg:pr-20 gap-6 lg:gap-10 text-white">
          {menuOptions.map((item) => (
            <motion.span
              onClick={() => handleMenuClick(item.Navlink)}
              key={item.Navlink}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl"
            >
              <Link to={item.Navlink}>
                <FlipLink>{item.Header}</FlipLink>
              </Link>
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Menu1;
