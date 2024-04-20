import Banner from "@/Components/Banner";
import Navbar from "../Components/Navbar"
import ProjectsContainer from "../Components/ProjectsContainer";
import portfolioData from '../data.json';
import Footer from "@/Components/Footer";
import AboutMeCard from "@/Components/AboutMeCard";
import TopNavButtons from "@/Components/TopNavButtons";
import { motion } from 'framer-motion';
import Link from "next/link";
import SquareCardContainer from "@/Components/SquareCardContainer";
export default function Home() {
  // left nav  |  banner 
  // left nav  |  about me tabs 
  // left nav  |  project tabs
  // left nav  |  tech stack scroller
  // left nav  |  footer

  const ProjectData = portfolioData;  // all in json file 

  return (
    
    <main id="style-1" className="flex flex-col justify-between bg-black h-[100vh] max-h-[100vh] w-[100vw] max-w-[100vw] pt-4 overflow-x-hidden overflow-y-scroll" >
        <div className="flex flex-row w-full">
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0,
              transition: { delay: 1 } } }}>   
            <Navbar />
          </motion.div>
          <motion.div className='ml-2 md:ml-[300px] mr-2 w-full' initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0, 
            transition: { delay: 1 } } }}>  
            <div className="flex flex-col w-[100%] p-4 gap-y-2 card_background rounded-md min-h-[100vh]">
              < TopNavButtons /> 
              < Banner />
              <ProjectsContainer {...ProjectData} />
              <SquareCardContainer/>
            </div>
        </motion.div>
        </div>
        <Footer />
    </main>
  );
}
