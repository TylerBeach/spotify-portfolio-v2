import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/Components/Navbar";
import TopNavButtons from "@/Components/TopNavButtons";
import ProfileSongsContainer from "@/Components/ProfileSongsContainer";
import MusicPlayer from "@/Components/MusicPlayer";
import { motion } from "framer-motion";
import ProfileTopContainer from "@/Components/ProfileTopContainer";
import getSecondDominantColor from "@/utils/getDominantColor";
import data from "../data.json";
import PersonalPopUp from "@/Components/PersonalPopUp";

function About() {
  // fetch profile data from github to display some stats :D
  const [githubData, setGithubData] = useState(null);
  const url = 'https://api.github.com/users/TylerBeach';
  const fetchData = () => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error getting data');
        }
        return response.json();
      })
      .then(newData => {
        setGithubData(newData);
        console.log(newData);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);


  // gets the banner color for the fade effect on the page 
  const [bannerColor, setBannerColor] = useState("");
  useEffect(() => {
    getSecondDominantColor(data.about.bannerURL, (averageColorHex: any) => {
      console.log("Average Color in Hex:", averageColorHex);
      setBannerColor(averageColorHex);
    });
  }, []);

  return (
    <div className="flex flex-row gap-x-2 bg-black max-w-[100vw] pb-[90px] min-h-[100vh] max-h-[100vh] md:pl-2 overflow-hidden">
      
      {/* Navbar Container */}
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

      {/* Page Content Container */}
      <motion.div
        className="relative mt-0 md:mt-2 h-fit height-minus-musicPlayer w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
        }}
      >
        <div className="flex flex-col h-fit w-full pt-0 card_background rounded-md height-minus-musicPlayer overflow-y-auto overflow-x-hidden">
          <TopNavButtons imageURL={data.about.bannerURL} title="Tyler Beach" />
          <div className="rounded-md card_background h-fit w-full">
            <ProfileTopContainer />
            <div
              style={{
                background: `linear-gradient(to bottom, rgb(${bannerColor}) 0%, rgb(18, 18, 18) 100%)`,
                height: "200px",
                width: "100%",
              }}
            ></div>
            <div className="mt-[-100px] flex flex-col md:flex-row flex-wrap h-fit z-[2] pl-4 gap-y-4 gap-x-4">
              <div className="flex-[4] w-full h-auto flex flex-col gap-y-2 min-w-[425px]">
                <h2 className="text-white text-3xl font-SpotifyBold">About</h2>
                {data.about.paragraphs.map((section, index) => (
                  <PersonalPopUp
                    key={index}
                    title={section.title}
                    paragraphContent={section.paragraphContent}
                    image={section.image}
                    index={index}
                    githubData={githubData}
                  />
                ))}
              </div>
              <div className="flex-[2] flex flex-row gap-x-6">
                <a href="https://www.linkedin.com/in/tylerbe/" className="flex-1 flex flex-col gap-y-1">
                  <h2 className="text-white text-2xl">LinkedIn</h2>
                  <img className="w-[75px] h-[75px] object-cover rounded-full" src={"/images/LinkedIn.png"} alt="Tyler Beach" />
                </a>
                <Link href="/resume" className="flex-1 flex flex-col gap-y-1">
                  <h2 className="text-white text-2xl">Resume</h2>
                  <img className="w-[75px] h-[75px] object-cover rounded-full" src={"/images/Resume.png"} alt="Tyler Beach" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Music player at bottom of screen */}
      <MusicPlayer />
    </div>
  );
}

export default About;
