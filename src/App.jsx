import { useState } from "react";
import ReactLenis, { useLenis } from "lenis/react";
import Router from "./Routes/Router";
import Hero from "./Hero";
import { LiaTimesSolid, LiaGripLinesSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import Menu1 from "./Menu1";
import MyCanvasComponent from "./Threejs/MyCanvasComponent";

function App() {
  const [Menu, setMenu] = useState(false);
  const lenis = useLenis(({ scroll }) => {  });
  const [MouseX, setMouseX] = useState();
  const [MouseY, setMouseY] = useState();

  return (
    <ReactLenis root>
      <span
        style={{ left: MouseX, top: MouseY }}
        className={`w-7 h-7  border-2 border-white/70 z-[100]  absolute rounded-full  `}
      />
      <div
        onMouseMove={(e) => {
          setMouseX(e.clientX);
          setMouseY(e.clientY);
        }}
        className="bg-[#0a0908] cursor-none select-none text-[#f6cba3] text-[25vh] w-full h-auto min-h-screen"
      >
        {!Menu ? (
          <motion.span
            key="menu-icon"
            onClick={() => {
              setMenu(true);
              new Howl({
                src: ["whoosh-cinematic.mp3"],
                loop: false,
                volume: 1,
              }).play();
            }}
            className="magnet-target absolute top-4 z-50 right-8 "
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <LiaGripLinesSolid className="w-10 h-10" />
          </motion.span>
        ) : (
          <motion.div
            key="menu-content"
            className="absolute top-0 right-0 z-50 bg-black blur-my w-screen h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {" "}
            <LiaTimesSolid
              onClick={() => {
                setMenu(false);
                new Howl({
                  src: ["whoosh-cinematic.mp3"],
                  loop: false,
                  volume: 1,
                }).play();
              }}
              className="absolute top-4 right-8 w-10 h-10 z-50  text-white"
            />
            <Menu1 change={setMenu} />
          </motion.div>
        )}
        <Router />
      </div>
    </ReactLenis>
  );
}

export default App;
