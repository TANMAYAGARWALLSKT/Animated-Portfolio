import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Project from "../Project";
import About from "../About";
import Menu1 from "../Menu1";
import Loader from "../Loader";
import { LiaGripLinesSolid, LiaTimesSolid } from "react-icons/lia";
import OtherageTrantion from "../Framer Motion Effect/OtherageTrantion";

function Router() {
  const location = useLocation();
  const [Menu, setMenu] = useState(false);

  return (
    <div>
      {/* Menu Toggle */}
      <AnimatePresence>
        {!Menu ? (
          <motion.span
            key="menu-icon"
            onClick={() => {
              setMenu(true);
              playSound();
            }}
            className="magnet-target absolute top-4 z-[990] right-8"
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
            className="absolute top-0 right-0 z-50 bg-[#0a0908] blur-my min-h-screen h-full w-screen"
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

      {/* Routes with Page Transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <>
                <Loader />
              </>
            }
          />

          <Route
            path="/AboutMe"
            element={
              <>
                <About />
                <OtherageTrantion />
              </>
            }
          />
          <Route
            path="/Project"
            element={
              <>
                <Project />
                <OtherageTrantion />
              </>
            }
          />
          <Route path="" />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Router;
