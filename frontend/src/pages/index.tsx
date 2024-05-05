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
    <main className="flex flex-col justify-between bg-black max-h-[100vh] h-[100vh] pb-[90px] w-[100%] max-w-[100%] pt-2 pl-2 overflow-x-hidden">
      <div className="flex flex-row w-full z-10 overflow-x-hidden scroll-hidden gap-x-2">
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
          <div className="flex flex-col h-fit w-full pt-16 gap-y-2 card_background rounded-md  min-h-[100vh]">
            <TopNavButtons backgroundColor="card_background" projectName="" />
            <div className="px-2">
              <Banner />
              <ProjectsContainer {...ProjectData} />
              <SquareCardContainer />
            </div>
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
