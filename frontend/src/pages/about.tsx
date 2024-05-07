import React from "react";
import Link from "next/link";
import Navbar from "@/Components/Navbar";
import TopNavButtons from "@/Components/TopNavButtons";
import ProfileSongsContainer from "@/Components/ProfileSongsContainer";
import MusicPlayer from "@/Components/MusicPlayer";
import { motion } from "framer-motion";
import ProfileTopContainer from "@/Components/ProfileTopContainer";
import { useState, useEffect } from "react"; 
import getSecondDominantColor from "@/utils/getDominantColor";
import data from "../data.json"
import {Project } from "../interfaces/project";


function about() {
  const aboutMeProject: Project = {
    id: "aboutMeProject",
    title: "Tyler Beach", };
  const [bannerColor, setBannerColor] = useState("");

  useEffect(() => {
    getSecondDominantColor(data.about.bannerURL, (averageColorHex:any) => {
        console.log('Average Color in Hex:', averageColorHex);
        setBannerColor(averageColorHex);
    });
  }, []);

  return (
      <div className="flex flex-row gap-x-2 bg-black max-w-[100vw] pb-[90px] min-h-[100vh] max-h-[100vh] md:pl-2 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0, transition: { delay: 1 } },
        }}
        className="hidden md:flex w-[300px] md:max-w-[300px] md:min-w-[300px] mt-2"
      >
        <Navbar />
      </motion.div>
        <motion.div
          className="relative mt-0 md:mt-2 h-fit height-minus-musicPlayer w-full  overflow-y-scroll"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0, transition: { delay: 1 } },
          }}
        >
          <div className="flex flex-col h-fit w-full pt-0 card_background rounded-md  min-h-[100vh] overflow-x-hidden">
            <TopNavButtons bannerColor={bannerColor} project={aboutMeProject}/>
            <div className="rounded-md card_background h-fit w-full">
              <ProfileTopContainer />
              <div style={{
                  background: `linear-gradient(to bottom, rgb(${bannerColor}) 0%, rgb(18, 18, 18) 100%)`,
                  height: "200px",
                  width: "100%"
              }}
              ></div>
              <div className="mt-[-100px] flex flex-col h-fit z-[2] pl-4 gap-y-4">
                <ProfileSongsContainer />
                <ProfileSongsContainer />
                <ProfileSongsContainer />
              </div>

            </div>
          </div>
        </motion.div>
        <MusicPlayer />
      </div>
  );
}
// TODO: make the scroll bar not scroll over the music player

export default about;
