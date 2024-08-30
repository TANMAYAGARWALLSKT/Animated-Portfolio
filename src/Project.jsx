import { motion } from "framer-motion";
import React from "react";
import FlipLink from "./Framer Motion Effect/FlipLink";

function Project() {
  const projects = [
    {
      ProjectName: "Group 3 CTS",
      Description:
        "I developed a dynamic web application for exploring creative thinking strategies using HTML, CSS, JavaScript, GSAP, and Tailwind CSS. The app features interactive exercises like mind mapping and SCAMPER, with smooth animations powered by GSAP. Tailwind CSS was utilized to create a responsive and modern UI, while JavaScript enabled seamless interaction. This project highlights my ability to combine front-end technologies to build engaging and educational web experiences.",
      DemoLink: "https://group3cts.vercel.app/",
      CodeLink: "https://github.com/TANMAYAGARWALLSKT/nehul",
      CustomClass: "w-[40%]",
      CustomClassHeader: "border-b-2 border-t-2 border-white/50",
      Video: "./video2.mp4",
    },
    {
      ProjectName: "Bubble Game",
      Description:
        "In this Bubble Game, the player's goal is to click on the correct number from a group of bubbles displayed on the screen. A random target number is generated at the top, and the player must find and click the matching number among the bubbles below.",
      DemoLink: "https://bubble-game-three-iota.vercel.app/main.html",
      CodeLink: "https://github.com/TANMAYAGARWALLSKT/BubbleGame",
      CustomClass: "w-[46%]",
      CustomClassHeader: "border-b-2 border-white/50 flex-row-reverse",
      Video: "./video2.mp4",
    },
    {
      ProjectName: "SaaS App",
      Description:
        "This SaaS application is designed to help users efficiently manage their financial data, including tracking income, expenses, total income, total cash in, and cash out. With a user-friendly interface and robust backend, users can seamlessly monitor their financial activities and export their data to Excel for further analysis or record-keeping.",
      DemoLink: "https://manage-income-exp-mmbd.vercel.app/User",
      CodeLink: "https://github.com/TANMAYAGARWALLSKT/Manage-Income---Exp",
      CustomClass: "w-[32%]",
      CustomClassHeader: "border-b-2 border-white/50",
      Video: "./video2.mp4",
    },
  ];

  return (
    <motion.div
      initial={{ y: 1000, scale: 0.5, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "circInOut" }}
      className="w-screen h-full"
    >
      <h1 className="font-bold text-center mb-8 text-5xl">My Projects</h1>
      {projects.map((item, index) => (
        <div
          onMouseEnter={(e) => {
            const video = e.currentTarget.querySelector("video");
            if (video) {
              video.play();
              video.style.opacity = "1";
            }
          }}
          onMouseLeave={(e) => {
            const video = e.currentTarget.querySelector("video");
            if (video) {
              video.pause();
              video.currentTime = 0; // Reset video to start
              setTimeout(() => {
                video.style.opacity = "0";
              }, 150); // Slight delay to avoid flicker
            }
          }}
          key={index}
          className={`w-full flex p-5 justify-between h-auto ${item.CustomClassHeader}`}
        >
          <motion.video
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-[30%] rounded"
            src={item.Video}
            muted
            loop
            preload="metadata"
            style={{ opacity: "0" }} // Initially hide the video
          />
          <span
            className={`text-4xl flex flex-col text-end gap-5 ${item.CustomClass}`}
          >
            <span className="flex luckiest-guy flex-col">
              {item.ProjectName}
            </span>
            <p className="text-sm pl-5 pt-5 font-extralight">
              {item.Description}
            </p>
            <div className="flex  justify-center items-center">
              <a
                className="font-bold text-2xl  hover:bg-green-800 hover:text-white w-auto rounded-3xl flex justify-center items-center"
                href={item.CodeLink}
                aria-label={`View code for ${item.ProjectName}`}
              >
                Code
              </a>
              <a
                className="font-bold  text-2xl hover:bg-red-600 flex justify-center text-center items-center hover:text-white w-auto rounded-3xl"
                href={item.DemoLink}
                aria-label={`View demo for ${item.ProjectName}`}
              >
                Live Demo
              </a>
            </div>
          </span>
        </div>
      ))}
    </motion.div>
  );
}

export default Project;
