import Banner from "@/Components/Banner";
import Navbar from "../Components/Navbar"
import ProjectsContainer from "../Components/ProjectsContainer";
import portfolioData from '../data.json';
import Footer from "@/Components/Footer";

export default function Home() {
  // left nav  |  banner 
  // left nav  |  about me tabs 
  // left nav  |  project tabs
  // left nav  |  tech stack scroller
  // left nav  |  footer

  const ProjectData = portfolioData;  // all in json file 

  return (
    <main id="style-1" className="flex flex-col justify-between font-SpotifyMedium bg-black h-[100vh] max-h-[100vh] w-[100vw] max-w-[100vw] overflow-x-hidden overflow-y-scroll" >
      <div className="flex flex-row ">
        <Navbar />
        <div id="style-1" className="flex flex-col w-[100%] ml-4 mt-4 md:ml-[300px] ">
          {/* <Projects {...ProjectData} /> */}
          < Banner />
          <ProjectsContainer {...ProjectData} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
