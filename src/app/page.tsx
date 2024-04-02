import Navbar from "./Components/Navbar"
import Projects from "./Components/Project"

export default function Home() {
  // left nav 
  // banner 
  // projects 
  // tech stack 
  // footer bar 

  const ProjectData = {
    projects: [
      {
        title: "Project 1",
        paragraphData: [
          {"paragraphTitle": "Project 1",
          "paragraphContent": "This is the first project",
          },
          {"paragraphTitle": "Project 1",
          "paragraphContent": "This is the first project",
          }
        ],
        link: "https://www.google.com",
        imageURL: "https://www.google.com",
        demoImages: [
          "https://www.google.com",
          "https://www.google.com",
          "https://www.google.com",
        ],
        date: "Date"
      }
  ]}



  return (
    <main className="flex flex-row font-SpotifyMedium " >
      <Navbar />
      <div className="flex flex-col ml-[300px]">
        <Projects {...ProjectData} />
      </div>

    </main>
  );
}
