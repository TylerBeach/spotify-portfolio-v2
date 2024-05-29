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
  const url = "https://api.github.com/users/TylerBeach";
  const fetchData = () => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error getting data");
        }
        return response.json();
      })
      .then((newData) => {
        setGithubData(newData);
        console.log(newData);
      })
      .catch((error) => {
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
    <div className="flex flex-col justify-between bg-black max-h-[100vh] h-[100vh]  w-[100%] max-w-[100%] md:pt-2 md:pl-2 overflow-x-hidden">
      <div className="flex flex-row w-full z-10 overflow-x-hidden scroll-hidden gap-x-2 md:pr-0 rounded-md">
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
          className="h-fit bg-black w-full overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
          }}
        >
          <div 
          className="flex flex-col h-fit w-full pb-8 gap-y-2 card_background rounded-lg height-minus-musicPlayer overflow-y-scroll">
            <TopNavButtons
              imageURL={"/images/profileBanner2.jpg"}
              title="Tyler Beach"
            />
            <div className="flex flex-col h-fit w-full pt-0 card_background rounded-lg">
              <div className="rounded-md card_background h-fit w-full">
                <ProfileTopContainer />
                <div
                  style={{
                    background: `linear-gradient(to bottom, rgb(${bannerColor}) 0%, rgb(18, 18, 18) 100%)`,
                    height: "200px",
                    width: "100%",
                  }}
                ></div>
                <div className="mt-[-120px] flex flex-col md:flex-row flex-wrap h-fit z-[2] pl-4 gap-y-4 gap-x-4 pb-12">
                  <div className="flex-[1] w-full h-auto flex flex-col gap-y-2 min-w-[300px] pr-2">
                    <h2 className="text-white text-2xl">About</h2>
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
                  <div className="flex-[1] flex flex-wrap md:flex-nowrap flex-row gap-y-6 gap-x-4">
                    {/* Important Links */}
                    <div className="flex-1 flex flex-col gap-y-4 min-w-[250px]">
                      <h2 className="text-white text-2xl">Important Links</h2>
                      <div className="flex flex-col">
                        <div className="flex flex-row gap-x-2">
                          <a
                            href="https://www.linkedin.com/in/tylerbe/"
                            className=""
                          >
                            <img
                              className="w-[75px] h-[75px] object-cover min-w-[75px] rounded-full"
                              src={"/images/LinkedIn.png"}
                              alt="Tyler Beach"
                            />
                          </a>
                          <div className="my-auto pr-12">
                            <h2 className="text-white text-lg font-extrabold SpotifyLightFont text-nowrap">
                              Connect with me
                            </h2>
                            <h2 className="text-white text-sm brightness-75 SpotifyLightFont">
                              Message me if you think I fit a role you need!
                            </h2>
                          </div>
                        </div>
                      </div>
                      <Link href="/resume" className="flex flex-col ">
                        <div className="flex flex-row gap-x-2">
                          <img
                            className="w-[75px] h-[75px] object-cover min-w-[75px] rounded-full"
                            src={"/images/Resume.png"}
                            alt="Tyler Beach"
                          />
                          <div className="my-auto">
                            <h2 className="text-white text-lg font-extrabold SpotifyLightFont">
                              Check out my resume
                            </h2>
                            <h2 className="text-white text-sm brightness-75 SpotifyLightFont">
                              Looking for developer roles
                            </h2>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Tyler's Pick */}
                    <div className="flex-1 flex flex-col gap-y-4 min-w-[170px]">
                      {/* NOTE TO SELF USING SINGLE QUOTES IS BAD IDEA */}
                      <h2 className="text-white text-2xl">{`Tyler's Pick`}</h2>
                      <a
                        href="https://open.spotify.com/album/5wtE5aLX5r7jOosmPhJhhk?si=39keDNFUQfSvOt0EV-O08Q"
                        className="flex flex-col w-fit"
                      >
                        <div className="flex flex-row gap-x-2">
                          <img
                            className="w-[170px] h-[170px] object-cover rounded-md"
                            src={"/images/Swimming.jpg"}
                            alt="Tyler Beach"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <footer className="px-4 flex flex-col pb-12">
                  <h2 className="text-white text-2xl">Thanks for visiting!</h2>
                  <h2 className="text-white text-lg brightness-75 text-wrap pr-4 SpotifyLightFont">
                    Like the site? Let me know by reaching out{" "}
                    <Link
                      href="/contact"
                      className="text-blue-400 underline brightness-75 hover:brightness-125"
                    >
                      here!
                    </Link>
                  </h2>
                </footer>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Music player at bottom of screen */}
        <MusicPlayer />
      </div>
    </div>
  );
}

export default About;
