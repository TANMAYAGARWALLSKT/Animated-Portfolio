import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Project from "../Project";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "../Loader";
import Menu1 from "../Menu1";
import { LiaTimesSolid, LiaGripLinesSolid } from "react-icons/lia";
import Footer from "../Footer";
import { Howl } from "howler";

function Router() {
  const [Menu, setMenu] = useState(false);

  const playSound = () => {
    new Howl({
      src: ["whoosh-cinematic.mp3"],
      loop: false,
      volume: 1,
    }).play();
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!Menu ? (
          <motion.span
            key="menu-icon"
            onClick={() => {
              setMenu(true);
              playSound();
            }}
            className="magnet-target absolute top-4 z-50 right-8"
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
            className="absolute top-0 right-0 z-50 bg-[#0a0908]  min-h-screen h-full w-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LiaTimesSolid
              onClick={() => {
                setMenu(false);
                playSound();
              }}
              className="absolute top-4 right-8 w-10 h-10 z-50 text-white"
            />
            <Menu1 change={setMenu} />
          </motion.div>
        )}
      </AnimatePresence>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Loader />
            </>
          }
        />
        <Route path="/Menu" element={<Menu1 />} />
        <Route
          path="/Project"
          element={
            <>
              <Project />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default Router;
