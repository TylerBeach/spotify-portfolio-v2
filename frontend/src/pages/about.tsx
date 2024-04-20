import React from "react";
import Link from "next/link";
import Navbar from "@/Components/Navbar";
import TopNavButtons from "@/Components/TopNavButtons";
import ProfileSongsContainer from "@/Components/ProfileSongsContainer";
function about() {
  return (
    <div className="bg-black h-[100vh] w-[100vw] overflow-x-hidden overflow-y-auto">
      <div className="flex flex-row mr-0 mt-0 md:mt-4 md:mr-4 card_background w-full">
        <Navbar />
        <div className="flex flex-col w-full pl-[4px] h-auto md:pl-[300px]">
          <div className="flex flex-col justify-between about-background-image h-[400px] w-full">
          <TopNavButtons />  

          <div className="flex flex-col justify-end">
            <div className="flex flex-row pb-4">
              <img
                src="/images/Verified.png"
                alt="Tyler Beach"
                className=" h-[30px] w-[30px]"
                />
              <h2 className="text-white SpotifyLightFont font-medium text-1xl my-auto">
                Verified Developer
              </h2>
            </div>
            <h3 className="text-white text-4xl pl-4 pb-4 font-bold md:text-7xl">
              TYLER BEACH
            </h3>
          </div>
          </div>
          <div className="background-blur-container h-fit min-h-[300px] w-full z-[2]"></div>
          <div className="mt-[-250px] flex flex-col h-[1000px] z-[2]">
            <div>
              <ProfileSongsContainer/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
