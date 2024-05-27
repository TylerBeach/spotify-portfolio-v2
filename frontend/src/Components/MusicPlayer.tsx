import Image from 'next/image';
import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState("Personal Portfolio - Spotify Version");
  const [currentArtist, setCurrentArtist] = useState("Tyler Beach");
  const [currentAlbumImage, setCurrentAlbumImage] = useState("/images/Banner.png");
  const [playing, setPlaying] = useState("/images/Play.png");


  const playPause = () => {
    if (playing === "/images/Play.png") {
      setPlaying("/images/Pause.png");
    } else {
      setPlaying("/images/Play.png");
    }
  }

  return (
   

    <div className='h-[90px] bg-black flex flex-row justify-between fixed bottom-0 z-10 gap-x-4 w-[100vw]'>
        <div className='flex flex-row text-white  gap-x-3 pl-4 min-w-fit flex-1'>
            {/* Song + Artist + Image */}
            <img src={currentAlbumImage} alt="Album Image" className='w-[50px] h-[50px] my-auto rounded-sm' />
            <div className='flex flex-col justify-center'>
                <h1 className='SpotifyLightFont text-s sm:text-md md:text-lg '>{currentSong}</h1>
                {/* <h2 className='SpotifyLightFont'>{currentArtist}</h2> */}
                <Link href="/about" ><button type="button" className=''>{currentArtist}</button></Link>

            </div>
        </div>
        <div className='flex flex-col py-4 gap-y-3 max-w-[800px] pr-4 md:pr-0 justify-center align-middle content-center flex-1 md:min-w-[300px]'>
            {/* Pause/play forward back */}
            <div className='flex flex-row gap-x-4 my-auto justify-center text-white mx-auto'>
                <img  src="/images/Shuffle.svg" alt="play" className='w-[28px] h-[28px] p-1.5 mt-0.5  object-cover hover:cursor-pointer hidden md:block' />
                <img  src="/images/Forward.svg" alt="play" className='w-[28px] h-[28px] p-1.5 mt-0.5 object-cover rotate-180 hover:cursor-pointer hidden sm:block' />
                <a className='flex justify-center content-center w-[40px] h-[40px] md:w-[31px] md:h-[31px]  bg-white rounded-full min-w-fit'>
                  <img  src={playing} alt="play" onClick={playPause} className='p-[10px] md:p-[8px] md:pl-[9px] object-cover hover:cursor-pointer' />
                </a>
                <img  src="/images/Forward.svg" alt="play" className='w-[28px] h-[28px] p-1.5 mt-0.5 object-cover hover:cursor-pointer hidden sm:block' />
                <img  src="/images/Repeat.svg" alt="play" className='w-[28px] h-[28px] p-1.5 mt-0.5 object-cover hover:cursor-pointer hidden md:block' />
            </div>
            {/* Song Slider */}
            <div className='w-full bg-white h-1 my-auto hidden md:block'></div>
        </div>
        {/* volume slider */}
        <div className='flex-1 w-full justify-end my-auto hidden md:flex'>
          <div className='w-[100px] bg-white h-1 mx-6'></div>
        </div>
    </div>
   
  )
}

export default MusicPlayer