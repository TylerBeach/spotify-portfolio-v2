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
import SquareCardGeneric from "@/Components/SquareCardGeneric";
import HomePageWideCard from "@/Components/HomePageWideCard";

export default function Home() {
  // left nav  |  banner
  // left nav  |  about me tabs
  // left nav  |  project tabs
  // left nav  |  tech stack scroller
  // left nav  |  footer

  const ProjectData = portfolioData; // all in json file

  return (
    <main className="flex flex-col justify-between bg-black max-h-[100vh] h-[100vh]  w-[100%] max-w-[100%] md:pt-2 md:pl-2 overflow-x-hidden">
      <div className="flex flex-row w-full  overflow-x-hidden scroll-hidden gap-x-2 md:pr-0 rounded-md">
        
        {/* Navbar */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
          }}
          className="hidden md:flex w-[300px] md:max-w-[300px] md:min-w-[300px]"
        >
          <Navbar />
        </motion.div>

        {/* Page Content */}
        <motion.div
          className="h-fit bg-black w-full height-minus-musicPlayer overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.6 } },
          }}
        >
          <div className="flex flex-col  w-full pt-16 md:pt-24 gap-y-2 px-2 card_background rounded-lg height-minus-musicPlayer overflow-y-auto overflow-x-hidden pb-[90px] md:pb-0">
            <TopNavButtons imageURL={null} title={null}/>
            <div className="flex flex-col px-2 rounded-lg gap-y-5 h-fit">
              <Banner />

              <h2 className="text-white text-4xl font-SpotifyBold">Welcome</h2>
              <div className="w-full grid px-2 grid-cols-1 flex-wrap gap-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4">
                < HomePageWideCard imageURL={"/images/ProfileButtonImage.png"} title={"About Me"} link={"about"} />
                < HomePageWideCard imageURL={"/images/Projects.png"} title={"Projects"} link={"projects"} />
                < HomePageWideCard imageURL={"/images/ContactMe.png"} title={"Contact Me"} link={"contact"} />
              </div>
              
              <SquareCardContainer />
            </div>
          </div>
        </motion.div>
      <MusicPlayer />
      </div>
    </main>
  );
}
