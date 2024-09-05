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
    <motion.div className=" relative z-[900] top-0 left-0 blur-my h-[400vh] ">
      <motion.div className="sticky top-0 left-0 justify-center blur-my flex   sm:justify-start sm:flex-row flex-wrap gap-5  items-start">
        {/* 3D Canvas Component */}
        <div className=" flex  justify-start items-center w-screen h-[55vh] lg:w-1/2 lg:h-screen sm:h-1/3">
          <Suspense
            fallback={
              <div className="flex justify-center items-center text-center  text-lg">
                Loading...
              </div>
            }
          >
            <MyCanvasComponent />
          </Suspense>
        </div>

        {/* Menu Options */}
        <div className="flex flex-col justify-center items-center text-center lg:items-end   lg:pr-20 gap-6 lg:gap-10 w-auto lg:w-1/2 h-auto">
          {menuOptions.map((item) => (
            <motion.span
              onClick={() => handleMenuClick(item.Navlink)}
              key={item.Navlink}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl cursor-pointer "
              aria-label={item.Header}
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
