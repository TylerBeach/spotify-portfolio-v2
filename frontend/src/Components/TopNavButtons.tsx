// TopNavButtons.tsx
import React, { useEffect, useState } from "react";

interface Project {
  id: string;
  title: string;
  cardDescription: string;
  paragraphData: { paragraphTitle: string; paragraphContent: string }[];
  link: string;
  imageURL: string;
  bannerURL: string;
  demoImages: string[];
  techStack: string[];
  date: string;
}

interface TopNavButtonsProps {
  project: Project;
  bannerColor: string; // Pass banner color as prop
}

const TopNavButtons: React.FC<TopNavButtonsProps> = ({ project, bannerColor }) => {
  const [showColor, setShowColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollingElement = document.querySelector('.height-minus-musicPlayer');
      if (scrollingElement && scrollingElement.scrollTop >= 370) {
        setShowColor(true);
      } else {
        setShowColor(false);
      }
    };
  
    // Attach scroll event listener to scrolling container
    const scrollingElement = document.querySelector('.height-minus-musicPlayer');
    if (scrollingElement) {
      scrollingElement.addEventListener("scroll", handleScroll);
    }
  
    return () => {
      if (scrollingElement) {
        scrollingElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    console.log("showColor:", showColor); // Check if showColor changes
  }, [showColor]);

  const goBack = () => {
    window.history.back();
  };

  const goForward = () => {
    window.history.forward();
  };

  return (
    <div
      className="right-3 duration-700 fixed flex flex-row justify-between items-center top-0 top-buttons-width pl-4 h-auto py-4 pr-14 text-white rounded-none md:top-2 z-10"
      style={{
        backgroundColor: showColor ? `rgb(${bannerColor}, 1)` : "rgba(0, 0, 0, 0.0)",
      }}
    >
      <div className="flex flex-row gap-x-4 pl-2 md:pl-0">
        <img
          src="/images/arrow.png"
          onClick={goBack}
          alt="Back"
          className="bg-black rounded-full px-[4px] pt-[5px] w-[30px] h-[30px] rotate-90 hover:cursor-pointer"
        />
        <img
          src="/images/arrow.png"
          onClick={goForward}
          alt="Forward"
          className="bg-black rounded-full px-[4px] pt-[5px] w-[30px] h-[30px] -rotate-90 hover:cursor-pointer"
        />
        {project && showColor && <h1 className="text-2xl pl-2 pt-0.5">{`${project.title}`}</h1>}
      </div>
      <div className="flex flex-row gap-x-4">
        <img
          src="/images/ProfileButtonImage.jpg"
          onClick={goForward}
          alt="Forward"
          className="rounded-full  w-[35px] h-[35px] outline-2 outline-black hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TopNavButtons;
