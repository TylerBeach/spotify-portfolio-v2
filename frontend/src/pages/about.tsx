import React from "react";
import Link from "next/link";
import Navbar from "@/Components/Navbar";
import TopNavButtons from "@/Components/TopNavButtons";
import ProfileSongsContainer from "@/Components/ProfileSongsContainer";
import MusicPlayer from "@/Components/MusicPlayer";


function about() {
  return (
    <div className="bg-black h-[100vh] w-[100vw] overflow-x-hidden overflow-y-auto">
      <div className="flex flex-row mr-0 mt-0 md:mt-4 md:mr-4 w-full">
        <Navbar />
        <div className="card_background flex flex-col w-full h-fit mb-[90px] pl-[4px] md:pl-[300px]  pb-[80px]">
          <div className="flex flex-col justify-between p-2 about-background-image h-[400px] w-full">
            <TopNavButtons />
            <div className="flex flex-col justify-end">
              <div className="flex flex-row pb-4">
                <img
                  src="/images/Verified.png"
                  alt="Tyler Beach"
                  className=" h-[30px] w-[30px]"
                />
                <h2 className="text-white SpotifyLightFont font-medium text-1xl my-auto text-nowrap">
                  Verified Developer
                </h2>
              </div>
              <h3 className="text-white text-4xl pl-4 pb-4 font-bold text-nowrap md:text-7xl">
                TYLER BEACH
              </h3>
            </div>
          </div>
          <div className="background-blur-container h-fit min-h-[300px] w-full z-[2]"></div>
          <div className="mt-[-250px] flex flex-col h-[1000px] z-[2] pl-4">
            <div>
              <ProfileSongsContainer />
            </div>
          </div>
        </div>
      </div>
      < MusicPlayer />
    </div>
  );
}
// TODO: make the scroll bar not scroll over the music player 

export default about;
