import Banner from "@/Components/Banner";
import Navbar from "../Components/Navbar"
import ProjectsContainer from "../Components/ProjectsContainer";
import portfolioData from '../data.json';
import Footer from "@/Components/Footer";
import AboutMeCard from "@/Components/AboutMeCard";
import { motion } from 'framer-motion';
import Link from "next/link";
export default function Home() {
  // left nav  |  banner 
  // left nav  |  about me tabs 
  // left nav  |  project tabs
  // left nav  |  tech stack scroller
  // left nav  |  footer

  const ProjectData = portfolioData;  // all in json file 

  return (
    
    <main id="style-1" className="flex flex-col justify-between pt-4 font-SpotifyMedium bg-black h-[100vh] max-h-[100vh] w-[100vw] max-w-[100vw] overflow-x-hidden overflow-y-scroll" >

        <div className="flex flex-row ">
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0,
              transition: { delay: 1 } } }}>   
            <Navbar />
          </motion.div>
          <div id="style-1" className="flex flex-col w-[100%] ml-4 md:ml-[300px] ">
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, 
            transition: { delay: 1.1 } } }}>   
            < Banner />
          </motion.div>
            <AboutMeCard />
          <ProjectsContainer {...ProjectData} />
          

          </div>
          

        </div>
        <Footer />
    </main>
  );
}
