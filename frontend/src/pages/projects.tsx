import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/Components/Navbar";
import TopNavButtons from "@/Components/TopNavButtons";
import ProfileSongsContainer from "@/Components/ProfileSongsContainer";
import MusicPlayer from "@/Components/MusicPlayer";
import { motion } from "framer-motion";
import ProfileTopContainer from "@/Components/ProfileTopContainer";
import ProjectListView from "@/Components/ProjectListView";
import ProjectsPageHeader from "@/Components/ProjectsPageHeader";
import { Project } from "../interfaces/project";
import getSecondDominantColor from "@/utils/getDominantColor";

function about() {
  const projects: Project = {
    id: "projects",
    title: "Projects",
  };

  const [bannerColor, setBannerColor] = useState("");
  useEffect(() => {
    getSecondDominantColor(
      `${"/images/ProjectPage.png"}`,
      (averageColorHex: any) => {
        console.log("Average Color in Hex:", averageColorHex);
        setBannerColor(averageColorHex);
      }
    );
  }, []);

  return (
    <main className="flex flex-row gap-x-2 bg-black max-w-[100vw] pb-[90px] min-h-[100vh] max-h-[100vh] md:pl-2 overflow-hidden">
      {/* Navbar Container */}
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
          <TopNavButtons bannerColor={bannerColor} project={projects} />
            <ProjectsPageHeader />
          <div className="mt-[-150px]">
            <ProjectListView />
          </div>
        </div>
      </motion.div>
      <MusicPlayer />
    </main>
  );
}
// TODO: make the scroll bar not scroll over the music player

export default about;
