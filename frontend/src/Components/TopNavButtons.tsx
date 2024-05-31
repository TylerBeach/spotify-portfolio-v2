import React, { useEffect, useState } from "react";
import Link from "next/link";
import getDominantColor from "../utils/getDominantColor";
import { motion, AnimatePresence } from "framer-motion";
import data from "../data.json";

function TopNavButtons({title, imageURL}:{title: string | null, imageURL: string | undefined | null}) {
  const [bannerColour, setBannerColour] = useState('');
  useEffect(() => {
    getDominantColor(`${imageURL}`, (averageColorHex:any) => {
      console.log('Average Color in Hex:', averageColorHex);
      setBannerColour(averageColorHex);
    });
  }, [imageURL]);

  const [showColor, setShowColor] = useState(false);
  useEffect(() => {
    if (title === null && imageURL === null) {
      setShowColor(true);
      setBannerColour('18, 18, 18');
    } else if (title === null && imageURL !== null) {
      setShowColor(true);
    }

    const handleScroll = () => {
      const scrollingElement = document.querySelector(".height-minus-musicPlayer");
      if (scrollingElement && scrollingElement.scrollTop >= 350) {
        setShowColor(true);
      } else {
        setShowColor(false);
      }
    };

    const scrollingElement = document.querySelector(".height-minus-musicPlayer");
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

  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <div
      className="right-0 sm:right-2 duration-700 fixed flex flex-row justify-between items-center top-0 top-buttons-width pl-4 h-auto py-4 pr-4 md:pr-6 text-white md:rounded-tl-md md:top-2 z-[1000]"
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
          className="bg-black rounded-full px-[4px] pt-[5px] w-[30px] h-[30px] rotate-90 hover:cursor-pointer hidden md:flex"
        />
        <img
          src="/images/arrow.png"
          onClick={goForward}
          alt="Forward"
          className="bg-black rounded-full px-[4px] pt-[5px] w-[30px] h-[30px] -rotate-90 hover:cursor-pointer hidden md:flex"
        />
        <div className="bg-black w-[40px] h-[40px] rounded-full flex md:hidden z-[50] hover:cursor-pointer" onClick={handleMenuClick}>
          <img src="/images/HamburgerMenu.png" alt="Menu" className="w-[18px] h-[14px] mx-auto my-auto" />
        </div>
        {title && (
          <h1 className={showColor ? "text-2xl pl-2 duration-500 flex my-auto pt-0.5" : "text-2xl pl-2 duration-300 flex my-auto pt-0.5 opacity-0"}>
            {`${title}`}
          </h1>
        )}
      </div>

      <div className="flex flex-row gap-x-4 pr-2 z-10">
        <Link href="/about" passHref>
          <img
            src="/images/ProfileButtonImage.jpg"
            alt="Profile"
            className="rounded-full w-[35px] h-[35px] outline-2 outline-black hover:cursor-pointer"
          />
        </Link>
      </div>

      {showMenu && (
        <div onClick={handleMenuClick} className="fixed top-0 left-0 bottom-0 right-0 w-[100vw] h-[100vh] bg-black opacity-40 z-[900]"></div>
      )}

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="pt-4 pl-1 absolute top-0 bottom-0 left-0 z-[1000] w-[70%] min-w-fit min-h-[100vh] h-[100vh] card_background_light flex flex-col gap-y-2 overflow-y-auto"
          >
            <div className="flex flex-row justify-between pl-2 pr-4">
              <Link href="/about" className="flex flex-row">
                <img
                  src="/images/ProfileButtonImage.jpg"
                  alt="Profile"
                  className="rounded-full w-[40px] h-[40px] my-auto outline-2 outline-black hover:cursor-pointer"
                />
                <div>
                  <h1 className="text-white text-xl pl-2">Tyler Beach</h1>
                  <h3 className="text-white text-sm pl-2 SpotifyLightFont">View profile</h3>
                </div>
              </Link>
              <div className="bg-black w-[30px] h-[30px] my-auto rounded-full flex md:hidden z-50">
                <img
                  src="/images/X.png"
                  alt="Menu"
                  className="w-[18px] h-[14px] mx-auto my-auto hover:cursor-pointer"
                  onClick={handleMenuClick}
                />
              </div>
            </div>
            <ul className="text-white SpotifyLightFont flex flex-col pb-8">
              {Object.entries(data.navbar).map(([sectionName, items], sectionIndex) => (
                <div className="flex flex-col rounded-md w-full" key={sectionIndex}>
                  <div className="divider brightness-125 mb-2 mt-2"></div>
                  <ul className="flex flex-col pl-1 pr-2">
                    {items.map((item, index) => (
                      <Link key={index} href={item.link} className="flex flex-row gap-x-2 my-auto h-10 pl-3 py-2 hover:bg-[#464646]  rounded-md">
                        <img key={index} src={item.icon} alt={item.title} className={`w-6 h-6 ${sectionIndex === 0 ? "rounded-none" : "rounded-full"}`} />
                        <h2 className="pl-1 text-md h-6 pt-[1.5px]">{item.title}</h2>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TopNavButtons;
