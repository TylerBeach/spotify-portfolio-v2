import Image from 'next/image';
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';

function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState("Personal Portfolio - Spotify Edition");
  const [currentArtist, setCurrentArtist] = useState("Tyler Beach");
  const [currentAlbumImage, setCurrentAlbumImage] = useState("/images/frogHeadphones.png");
  const [playing, setPlaying] = useState("/images/Play.png");

  const playPause = () => {
    if (playing === "/images/Play.png") {
      setPlaying("/images/Pause.png");
    } else {
      setPlaying("/images/Play.png");
    }
  }

  const [value, setValue] = useState<number>(0);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };
  useEffect(() => {
    const slider = document.getElementById('spotifySlider') as HTMLInputElement;
    const valuePercentage = (value - Number(slider.min)) / (Number(slider.max) - Number(slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, #fff 0%, #fff ${valuePercentage}%, #464646 ${valuePercentage}%, #464646 100%)`;
  }, [value]);

  const [volume, setVolume] = useState<number>(0);
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
  };
  useEffect(() => {
    const slider = document.getElementById('spotifySliderVolume') as HTMLInputElement;
    const valuePercentage = (volume - Number(slider.min)) / (Number(slider.max) - Number(slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, #fff 0%, #fff ${valuePercentage}%, #464646 ${valuePercentage}%, #464646 100%)`;
  }, [volume]);
 
  
  return (
    <motion.div 
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0, },
      visible: { opacity: 1, transition: { delay: 0.55 } },
    }}
    className='h-[90px] bg-black flex flex-row justify-between fixed bottom-0 left-0 right-0 gap-x-4 z-[100] min-w-[100vw] max-w-[100vw] w-[100vw]'>
      <div className='flex flex-row text-white gap-x-3 pl-4 min-w-fit flex-1'>
        {/* Song + Artist + Image */}
        <img src={currentAlbumImage} alt="Album Image" className='w-[50px] h-[50px] my-auto rounded-sm' />
        <div className='flex flex-col justify-center pt-0.5'>
          <h1 className='SpotifyLightFont text-lg sm:text-sm'>{currentSong}</h1>
          <Link href="/about"><button type="button" className='text-md'>{currentArtist}</button></Link>
        </div>
      </div>

      <div className='hidden sm:flex flex-col pt-0 pb-8 gap-y-0 max-w-[800px] pr-4 md:pr-0 justify-center align-middle content-center flex-[2] md:min-w-[300px]'>
        {/* Pause/play forward back */}
        <div className='flex flex-row gap-x-4 my-auto justify-center text-white mx-auto pt-3 pl-6'>
          <img src="/images/Shuffle.svg" alt="play" className='w-[28px] h-[28px] p-1.5 mt-0.5 object-cover hover:cursor-pointer hidden sm:block brightness-75' />
          <img src="/images/Forward.svg" alt="play" className='w-[28px] h-[28px] p-1.5 mt-0.5 object-cover rotate-180 hover:cursor-pointer block' />
          <a className='flex justify-center content-center w-[31px] h-[31px] max-w-[31px] min-w-[31px] bg-white rounded-full'>
            <img src={playing} alt="play" onClick={playPause} className='p-[7px] md:p-[8px] md:pl-[9px] object-cover hover:cursor-pointer' />
          </a>
          <img src="/images/Forward.svg" alt="play" className='w-[28px] h-[28px] p-1.5 mt-0.5 object-cover hover:cursor-pointer block' />
          <img src="/images/Repeat.svg" alt="play" className='w-[28px] h-[28px] p-1.5 mt-0.5 object-cover hover:cursor-pointer hidden sm:block brightness-75' />
        </div>
        {/* Song Slider */}
        <div className='w-full h-1 my-auto hidden sm:block max-w-[650px] mx-auto'>
          <input type="range" min="1" max="100" className="w-full spotifySlider" id="spotifySlider" value={value} onChange={handleChange} />
        </div>
      </div>
      {/* volume slider */}
      <div className='flex-1 w-full justify-end my-auto hidden md:flex'>
        <div className='w-[100px] h-1 pb-6 mx-6'>
          <input type="range" min="1" max="100" className="w-full spotifySlider" id="spotifySliderVolume" value={volume} onChange={handleVolumeChange} />
        </div>
      </div>
    </motion.div>
  )
}

export default MusicPlayer;
