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
import GeneralPageHeader from "@/Components/GeneralPageHeader";

function about() {

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
        className="relative mt-0 md:mt-2 h-fit height-minus-musicPlayer w-full  overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0, transition: { delay: 1 } },
        }}
      >
        <div className="flex flex-col h-fit w-full pt-0 card_background md:rounded-md height-minus-musicPlayer overflow-y-auto overflow-x-hidden">
          <TopNavButtons imageURL={"/images/ProjectPage.png"} title="Projects" />
          <GeneralPageHeader title="Projects" subHeading="Select one for more details" imageURL="/images/ProjectPage.png" />
          <div className="mt-[-150px] pb-8">
            <ProjectListView />
          </div>
        </div>
      </motion.div>
      <MusicPlayer />
    </main>
  );
}

export default about;
