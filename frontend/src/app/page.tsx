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
          "paragraphContent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar accumsan nisl, et finibus nunc accumsan rutrum. Aenean ligula ante, dapibus nec commodo quis, efficitur eget libero. Phasellus consequat dignissim lorem. Vestibulum at magna mauris. Integer in lorem ornare, molestie eros sed, eleifend augue. Curabitur porta massa magna, a consectetur arcu porta vel. Vestibulum consectetur quam eu consectetur luctus. In leo quam, bibendum sit amet est quis, mattis efficitur neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc aliquam enim at ante semper tempor. Nunc sit amet augue in elit tincidunt interdum at nec metus. Sed finibus turpis euismod elit viverra, id aliquam lorem ultrices. Proin mi sapien, elementum quis augue in, auctor semper elit. Nullam lacus metus, volutpat non nulla at, pharetra tincidunt erat. Maecenas nisl massa, efficitur vehicula feugiat nec, vehicula sed urna. Pellentesque vitae ipsum eget nunc feugiat euismod.",
          },
          {"paragraphTitle": "Project 2",
          "paragraphContent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar accumsan nisl, et finibus nunc accumsan rutrum. Aenean ligula ante, dapibus nec commodo quis, efficitur eget libero. Phasellus consequat dignissim lorem. Vestibulum at magna mauris. Integer in lorem ornare, molestie eros sed, eleifend augue. Curabitur porta massa magna, a consectetur arcu porta vel. Vestibulum consectetur quam eu consectetur luctus. In leo quam, bibendum sit amet est quis, mattis efficitur neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc aliquam enim at ante semper tempor. Nunc sit amet augue in elit tincidunt interdum at nec metus. Sed finibus turpis euismod elit viverra, id aliquam lorem ultrices. Proin mi sapien, elementum quis augue in, auctor semper elit. Nullam lacus metus, volutpat non nulla at, pharetra tincidunt erat. Maecenas nisl massa, efficitur vehicula feugiat nec, vehicula sed urna. Pellentesque vitae ipsum eget nunc feugiat euismod.",
          }
        ],
        link: "https://www.google.com",
        imageURL: "https://placehold.co/200",
        demoImages: [
          "https://placehold.co/200",
          "https://placehold.co/200",
          "https://placehold.co/200"
        ],
        date: "Date"
      }
  ]}



  return (
    <main className="flex flex-row font-SpotifyMedium bg-black h-[100vh] max-h-[100vh] w-[100vw] max-w-[100vw] overflow-auto" >
      <Navbar />
      <div className="flex flex-col ml-[300px] w-[100%]">
        {/* <Projects {...ProjectData} /> */}
        
      </div>

    </main>
  );
}
