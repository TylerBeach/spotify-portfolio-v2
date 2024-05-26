import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Coursework from "./Coursework";
import data from "../data.json";

export default function PersonalPopUp({ title, paragraphContent, image, index, githubData }: { title: string; paragraphContent: string; image: string; index: number; githubData: any}) {

  // const url = 'https://api.github.com/users/TylerBeach';
  // 
  // // GET request data from GitHub API at url
  // const fetchData = () => {
  //   fetch(url)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Error getting data');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  const wordsPerMinute = 238;
  const words = paragraphContent.split("").length;
  const totalSeconds = (words / wordsPerMinute) * 60;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.round(totalSeconds % 60);
  
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <div className="max-h-[43px] overflow-hidden">
      <div
        onClick={() => {
          setShowPopUp(true);
        }}
        className="cursor-pointer hover-effect2 flex flex-row max-w-[100vw] rounded-md w-[100%] h-max min-w-[320px] gap-x-2 pl-2 pr-8 md:pl-4 items-center SpotifyLightFont"
      >
        <h2 className="text-gray-400 w-2">{index + 1}</h2>
        <img
          className="rounded-md w-[35px] h-[35px] object-cover m-1 "
          src={image}
          alt="Title"
        />
        <h1 className="flex-[2] text-white text-xl SpotifyLightFont min-w-[125px]">{title}</h1>
        <h2 className="flex-[1] text-white brightness-75 text-xs SpotifyLightFont text-center">{paragraphContent.split("").length} </h2>
        <h2 className="flex-[1] text-white brightness-75 text-xs SpotifyLightFont text-center md:text-right">{minutes}:{seconds} </h2>
      </div>

      <AnimatePresence>
        {showPopUp && (
          // Pop Up Container
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.1 } },
            }}
            className="w-[100vw] h-[100vh] z-50 fixed"
          >
            {/* Blur for the background */}
            <div
              onClick={() => {
                setShowPopUp(false);
              }}
              className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-10"
            ></div>

            {/* Pop Up Content Here */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: 150, scale: 0.6 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { delay: 0.2 },
                },
              }}
              className="fixed top-0 left-0 right-0 bottom-0 w-[50%] h-[70%] min-w-[90%] md:min-w-[550px] m-auto card_background z-30 rounded-md p-4"
            >
              {/* Exit Button for the Pop Up  */}
              <img
                src="/images/X.png"
                onClick={() => {
                  setShowPopUp(false);
                }}
                className="filter-button absolute top-4 right-4 p-1.5 z-50 w-6 h-6 bg-red-700 rounded-xl"
              />

              {/* Actual Content Here */}
              {/* <h2 className="text-white z-30">Showing pop up</h2> */}
              <div className="flex flex-col gap-y-2">
                <div className="flex flex-row gap-x-6 h-fit w-full">
                  <div className="flex-1 w-auto h-auto">
                    <img
                      src={image}
                      className="flex-[1]  rounded-md object-cover z-30"
                      alt="Title"
                    />
                  </div>
                  <h1 className="flex-[3] text-white text-3xl sm:text-3xl md:text-4xl lg:text-6xl z-30 self-end h-full">
                    {title}
                  </h1>
                </div>
                <div className="flex flex-row gap-x-6">
                  <div className="hidden md:flex flex-col gap-y-4 pt-3 flex-1 text-white SpotifyLightFont">
                    <div>
                      <h2 className="text-xl SpotifyMediumFont font-extrabold">
                        {data.projects.length}
                      </h2>
                      <p className="text-sm brightness-75">Projects</p>
                    </div>
                    <div>
                      <h2 className="text-xl SpotifyMediumFont font-extrabold">
                        {githubData.public_repos}
                      </h2>
                      <p className="text-sm brightness-75">Github Repositories</p>
                    </div>
                    <div>
                      <h2 className="text-xl SpotifyMediumFont font-extrabold">
                      {githubData.followers}
                      </h2>
                      <p className="text-sm brightness-75">Github Followers</p>
                    </div>
                    <div className="w-full flex flex-col gap-y-2">
                      <a
                        href="www.linkedin.com/tylerbe"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-row brightness-75 hover:brightness-100 gap-x-1"
                      >
                        <img
                          src="/images/LinkedIn.png"
                          alt=""
                          className="w-[22px] h-[22px] grayscale"
                        />
                        <h2 className="flex flex-row brightness-75 ">
                          LinkedIn
                        </h2>
                      </a>
                      <a
                        href="www.github.com/TylerBeach"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-row brightness-75 hover:brightness-100 gap-x-1"
                      >
                        <img
                          src="/images/Github.png"
                          alt=""
                          className="w-[22px] h-[22px] grayscale"
                        />
                        <h2 className="flex flex-row brightness-75 ">Github</h2>
                      </a>
                      <a
                        href="https://open.spotify.com/user/impoona?si=f854820847394c6c&nd=1&dlsi=531221a44fe84856"
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-row brightness-75 hover:brightness-100 gap-x-1"
                      >
                        <img
                          src="/images/Spotify.png"
                          alt=""
                          className="w-[22px] h-[22px] grayscale"
                        />
                        <h2 className="flex flex-row brightness-75 ">
                          Spotify
                        </h2>
                      </a>
                    </div>
                  </div>
                  <div className="flex-[3] flex flex-col">
                  <p
                      className="text-white SpotifyLightFont"
                      dangerouslySetInnerHTML={{ __html: paragraphContent }}
                    ></p>
                    {title === "Education" ? (
                      <div className="flex flex-col">
                        <h2 className="pt-2 SpotifyLightFont text-lg text-white">
                          Courses Tyler has taken
                        </h2>
                        <Coursework />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
