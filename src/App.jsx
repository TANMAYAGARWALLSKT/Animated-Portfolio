import { useState } from "react";
import ReactLenis, { useLenis } from "lenis/react";
import Router from "./Routes/Router";
import Hero from "./Hero";
import { LiaTimesSolid, LiaGripLinesSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import Menu1 from "./Menu1";
import MyCanvasComponent from "./Threejs/MyCanvasComponent";
import Footer from "./Footer";

function App() {
  const [Menu, setMenu] = useState(false);
  const lenis = useLenis(({ scroll }) => {});
  const [MouseX, setMouseX] = useState();
  const [MouseY, setMouseY] = useState();

  return (
    <ReactLenis root>
      <div className="bg-[#0a0908]  select-none text-[#f6cba3] text-[25vh] w-full h-full min-h-screen">
        <Router />
      </div>
    </ReactLenis>
  );
}

export default App;
