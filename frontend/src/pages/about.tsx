import React from "react";
import Link from "next/link";
import Navbar from "@/Components/Navbar";
import TopNavButtons from "@/Components/TopNavButtons";
import ProfileSongsContainer from "@/Components/ProfileSongsContainer";
import MusicPlayer from "@/Components/MusicPlayer";
import { motion } from "framer-motion";
import ProfileTopContainer from "@/Components/ProfileTopContainer";

function about() {
  return (
    <main className="flex flex-col justify-between bg-black max-h-[100vh] h-[100vh] pb-[90px] w-[100%] max-w-[100%] pt-2 pl-2 overflow-x-hidden">
      <div className="flex flex-row w-full z-10 overflow-x-hidden scroll-hidden gap-x-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0, transition: { delay: 1 } },
          }}
          className="hidden md:flex w-[300px] md:max-w-[300px] md:min-w-[300px]"
        >
          <Navbar />
        </motion.div>
        <motion.div
          className="h-fit bg-black w-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0, transition: { delay: 1 } },
          }}
        >
          <div className="flex flex-col h-fit w-full pt-16  card_background rounded-md  min-h-[100vh]">
            <TopNavButtons backgroundColor="card_background" projectName=""/>
            <ProfileTopContainer />
            <div className="background-blur-container h-fit min-h-[300px] w-full z-[2]"></div>
            <div className="mt-[-250px] flex flex-col h-fit z-[2] pl-4">
              <div>
                <ProfileSongsContainer />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 1 } },
        }}
      >
        <MusicPlayer />
      </motion.div>
    </main>
  );
}
// TODO: make the scroll bar not scroll over the music player

export default about;
