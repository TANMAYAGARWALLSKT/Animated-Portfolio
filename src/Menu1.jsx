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
    <motion.div className="relative min-h-screen h-[200vh] bg-black overflow-hidden blur-my">
      <motion.div className="sticky top-0 left-0 h-screen w-full flex  justify-between  min-h-screen blur-my">
        {/* 3D Canvas Component */}
        <div className="p-2 flex justify-center w-full h-full lg:h-screen lg:w-1/2">
          <Suspense
            fallback={
              <div className="flex justify-center items-center text-center ClashDisplay-bold ">
                Loading...
              </div>
            }
          >
            <MyCanvasComponent />
          </Suspense>
        </div>

        {/* Menu Options */}
        <div className="flex flex-col justify-center items-center lg:items-end pr-4 lg:pr-20 gap-6 lg:gap-10  w-full lg:w-1/2">
          {menuOptions.map((item) => (
            <motion.span
              onClick={() => handleMenuClick(item.Navlink)}
              key={item.Navlink}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl cursor-pointer"
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
