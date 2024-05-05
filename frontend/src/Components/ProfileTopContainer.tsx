import React from "react";

function ProfileTopContainer() {
  return (
    <div className="flex flex-col justify-end p-2 about-background-image h-[400px] w-full">
      <div className="flex flex-col">
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
  );
}

export default ProfileTopContainer;
