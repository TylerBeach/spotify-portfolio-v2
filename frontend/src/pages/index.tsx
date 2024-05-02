import Banner from "@/Components/Banner";
import Navbar from "../Components/Navbar";
import ProjectsContainer from "../Components/ProjectsContainer";
import portfolioData from "../data.json";
import Footer from "@/Components/Footer";
import AboutMeCard from "@/Components/AboutMeCard";
import TopNavButtons from "@/Components/TopNavButtons";
import { motion } from "framer-motion";
import Link from "next/link";
import SquareCardContainer from "@/Components/SquareCardContainer";
import MusicPlayer from "@/Components/MusicPlayer";
export default function Home() {
  // left nav  |  banner
  // left nav  |  about me tabs
  // left nav  |  project tabs
  // left nav  |  tech stack scroller
  // left nav  |  footer

  const ProjectData = portfolioData; // all in json file

  return (
    <main className="flex flex-col justify-between bg-black max-h-[100vh] h-[100vh] pb-[90px] w-[100%] max-w-[100%] pt-4 overflow-x-hidden">
      <div className="flex flex-row w-full z-10 overflow-x-hidden scroll-hidden pr-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0, transition: { delay: 1 } },
          }}
          className="w-[300px]"
        >
          <Navbar />
        </motion.div>
        <motion.div
          className="width-minus-navbar justify-end"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0, transition: { delay: 1 } },
          }}
        >
          <div className="flex flex-col h-fit width-minus-navbar px-2 pl-4 pt-16 gap-y-2 card_background rounded-md  min-h-[100vh]">
            <TopNavButtons />
            <Banner />
            <ProjectsContainer {...ProjectData} />
            <SquareCardContainer />
          </div>
        </motion.div>
        
      </div>
      <motion.div
      className='z-10'
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, },
        visible: { opacity: 1,   transition: { delay: 1 } },
      }}
    >
      <MusicPlayer />
    </motion.div>
    </main>
  );
}
