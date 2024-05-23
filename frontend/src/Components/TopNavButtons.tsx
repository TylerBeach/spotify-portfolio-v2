// TopNavButtons.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Project } from "../interfaces/project";
import getDominantColor from "../utils/getDominantColor";



function TopNavButtons({title, imageURL}:{title: string | null, imageURL: string | undefined | null}) {
  const [bannerColour, setBannerColour] = useState('');
    useEffect(() => {
        getDominantColor(`${imageURL}`, (averageColorHex:any) => {
            console.log('Average Color in Hex:', averageColorHex);
            setBannerColour(averageColorHex);
        });
    }, []);


  const [showColor, setShowColor] = useState(false);

  useEffect(() => {
    if (title === null && imageURL === null) {
      setShowColor(true);
      setBannerColour('18, 18, 18');
    } else if (title === null && imageURL !== null) {
      setShowColor(true);
    }

    const handleScroll = () => {
      const scrollingElement = document.querySelector(
        ".height-minus-musicPlayer"
      );
      if (scrollingElement && scrollingElement.scrollTop >= 350) {
        setShowColor(true);
      } else {
        setShowColor(false);
      }
    };

    const scrollingElement = document.querySelector(
      ".height-minus-musicPlayer"
    );
    if (scrollingElement) {
      scrollingElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollingElement) {
        scrollingElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const goBack = () => {
    window.history.back();
  };

  const goForward = () => {
    window.history.forward();
  };

  return (
    <div
      className="right-0 duration-700 fixed flex flex-row justify-between items-center top-0 top-buttons-width pl-4 h-auto py-4 pr-4 md:pr-6 text-white md:rounded-tl-md md:top-2 z-10"
      style={{
        backgroundColor: showColor
          ? `rgb(${bannerColour}, 1)`
          : `rgb(${bannerColour}, 0)`,
        transition: "background-color 0.3s ease", 
      }}
    >
      <div className="flex flex-row gap-x-4">
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
        {title && (
          <h1
            className={
              showColor
                ? "text-2xl pl-2 duration-500"
                : "text-2xl pl-2 duration-300 opacity-0"
            }
          >{`${title}`}</h1>
        )}
      </div>
      <div className="flex flex-row gap-x-4 pr-2">
        <Link href="/about" passHref>
          <img
            src="/images/ProfileButtonImage.jpg"
            alt="Profile"
            className="rounded-full  w-[35px] h-[35px] outline-2 outline-black hover:cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopNavButtons;
