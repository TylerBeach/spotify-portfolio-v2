import Image from 'next/image';
import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

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
    <motion.div
      className='z-10'
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, },
        visible: { opacity: 1,   transition: { delay: 1 } },
      }}
    >

    <div className='h-[90px] bg-black grid grid-cols-3 justify-between fixed bottom-0 z-10 gap-x-2 w-[100vw]'>
        <div className='flex flex-row text-white gap-x-3 pl-4 min-w-fit'>
            {/* Song + Artist + Image */}
            <img src={currentAlbumImage} alt="Album Image" className='w-[50px] h-[50px] my-auto rounded-sm' />
            <div className='flex flex-col justify-center'>
                <h1 className='SpotifyLightFont font-extrabold'>{currentSong}</h1>
                <h2 className='SpotifyLightFont'>{currentArtist}</h2>
            </div>
        </div>
        <div className='flex flex-col py-4 gap-y-3 max-w-[800px]  justify-center align-middle content-center'>
            {/* Pause/play forward back */}
            <div className='flex flex-row gap-x-4 my-auto justify-center text-white mx-auto'>
                <img  src="/images/Shuffle.svg" alt="play" className='w-[30px] h-[30px] p-1.5 mt-0.5  object-cover' />
                <img  src="/images/Forward.svg" alt="play" className='w-[30px] h-[30px] p-1.5 mt-0.5 object-cover rotate-180' />
                <img  src={playing} alt="play" onClick={playPause} className='w-[35px] h-[35px] p-1.5 bg-white rounded-full object-cover' />
                <img  src="/images/Forward.svg" alt="play" className='w-[30px] h-[30px] p-1.5 mt-0.5 object-cover' />
                <img  src="/images/Repeat.svg" alt="play" className='w-[30px] h-[30px] p-1.5 mt-0.5 object-cover' />
            </div>
            {/* Song Slider */}
            <div className='w-full bg-white h-1 my-auto'></div>
        </div>
        {/* volume slider */}
        <div className='w-[100px] bg-white h-1 my-auto justify-self-end mx-6'></div>
    </div>
    </motion.div>
  )
}

export default MusicPlayer