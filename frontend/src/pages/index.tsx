import Navbar from "../Components/Navbar"
import ProjectsContainer from "../Components/ProjectsContainer";
import portfolioData from '../data.json';

export default function Home() {
  // left nav  |  banner 
  // left nav  |  about me tabs 
  // left nav  |  project tabs
  // left nav  |  tech stack scroller
  // left nav  |  footer

  const ProjectData = portfolioData;  // all in json file 

  return (
    <main className="flex flex-row font-SpotifyMedium bg-black h-[100vh] max-h-[100vh] w-[100vw] max-w-[100vw] overflow-auto" >
      <Navbar />
      <div className="flex flex-col ml-[300px] w-[100%]">
        {/* <Projects {...ProjectData} /> */}
        <ProjectsContainer {...ProjectData} />
      </div>

    </main>
  );
}
