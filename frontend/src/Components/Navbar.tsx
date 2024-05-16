import React from "react";
import NavListSection from "./NavListSection";
import navbarData from "../navbarData.json";


function Navbar() {
  const navbarInfo = navbarData;

  return (
    <div className="hidden md:flex fixed h-[100vh] w-full max-w-[300px] bg-black text-white flex-col">
      <div className="flex flex-col gap-y-2 overflow-y-scroll mb-[98px] scroll-hidden"> {/* dont ask why its 98 px man it just works :( */}
        {Object.entries(navbarInfo).map(([sectionName, items], index) => (
          <div
            className="flex flex-col rounded-md bg-[#121212] p-2 gap-y-3 text-lg pt-2 "
            key={sectionName}
          >
            {/* conditionally render the section name, skip if it's the first section legit just for formatting to look better*/}
            {index !== 0 && <h2 className="text-3xl pl-1 SpotifyLightFont font-bold pt-2">{sectionName}</h2>}
            <ul className="flex flex-col gap-y-0">
              {items.map((item, index) => (
                <NavListSection key={index} imageURL={item.icon} title={item.title} link={item.link} />
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col rounded-md bg-[#121212] p-2 gap-y-3 text-lg pt-2 " >
          {/* Show previously clicked links
          <h2 className="text-3xl pl-1 SpotifyLightFont font-bold pt-2">History</h2>
          <ul className="flex flex-col gap-y-0">
            
          </ul> 
          
          TODO
          
          */}
        </div>
      </div>


        
    </div>
    

  );
}

export default Navbar;
