import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Howl } from "howler";
import FlipLink from "./Framer Motion Effect/FlipLink";
import { LiaTimesSolid } from "react-icons/lia";

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
    <motion.div className="relative h-[500vh] bg-black blur-my ">
      <motion.div className=" sticky top-0 left-0 h-screen w-full flex justify-between min-h-screen ">
        {/* 3D Canvas Component */}
        <div className="w-[75vw] p-2 rounded-xl flex justify-center">
          <Suspense
            fallback={
              <div className="flex justify-center text-center ClashDisplay-bold">
                Loading...
              </div>
            }
          >
            <MyCanvasComponent />
          </Suspense>
        </div>

        {/* Menu Options */}
        <div className="text-7xl flex flex-col justify-center items-end pr-10 w-full gap-10">
          {menuOptions.map((item) => (
            <motion.span
              onClick={() => handleMenuClick(item.Navlink)}
              key={item.Navlink}
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
    </motion.div>
  );
}

export default Menu1;
