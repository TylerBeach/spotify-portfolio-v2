// [id].tsx
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import projectsData from "../../data.json"; // Assuming this imports correctly
import ProjectComponent from "../../Components/Project"; // Adjust the import path as needed
import Navbar from "@/Components/Navbar";
import TopNavButtons from "@/Components/TopNavButtons";
import Footer from "@/Components/Footer";
import MusicPlayer from "@/Components/MusicPlayer";
import { motion, AnimatePresence } from "framer-motion";
import getSecondDominantColor from "@/utils/getDominantColor";
import { Project } from "../../interfaces/project";
import PageNotFound from "@/Components/PageNotFound";

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<Project | null>(null);
  const [bannerColor, setBannerColor] = useState('');

  useEffect(() => {
    if (typeof id === "string") {
      const foundProject = projectsData.projects.find((p) => p.id === id);
      setProject(foundProject || null);
    }
  }, [id]);

  useEffect(() => {
    if (project) {
      getSecondDominantColor(project.bannerURL, (averageColorHex: any) => {
        console.log('Average Color in Hex:', averageColorHex);
        setBannerColor(averageColorHex);
      });
    } 
  }, [project]);

  if (!project) {
   return (<h2>Page not found!</h2>)
  }

  return (
    
    <div className="flex flex-row gap-x-2 bg-black max-w-[100vw] min-h-[100vh] max-h-[100vh] md:pl-2 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
        }}
        className="hidden md:flex w-[300px] md:max-w-[300px] md:min-w-[300px] mt-2"
      >
        <Navbar />
      </motion.div>

      <motion.div
          className="relative mt-0 md:mt-2 h-fit height-minus-musicPlayer w-full rounded-lg overflow-y-scroll"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
          }}
        >
            <TopNavButtons title={project.title} imageURL={project.bannerURL}/>
            <div className="flex flex-col h-fit w-full pt-0 card_background md:rounded-md overflow-y-auto overflow-x-hidden">
              <ProjectComponent project={project} />
            </div>
        </motion.div>


      {/* MusicPlayer */}
      <motion.div 
        className='fixed'
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, },
          visible: { opacity: 1, transition: { delay: 0.55 } },
        }}>
          <MusicPlayer />
      </motion.div>        
    </div>
  );
};

export default ProjectDetail;
