import Image from 'next/image';
import React from 'react'
import { useState } from 'react'
function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState("Personal Portfolio - Spotify Version");
  const [currentArtist, setCurrentArtist] = useState("Tyler Beach");
  const [currentAlbumImage, setCurrentAlbumImage] = useState("/images/Banner.png");
  const [playing, setPlaying] = useState("Play");


  const playPause = () => {
    if (playing === "Play") {
      setPlaying("Pause");
    } else {
      setPlaying("Play");
    }
  }

  return (
    <div className='h-[100px] bg-black flex-row flex justify-between fixed bottom-0 z-10 gap-x-2 w-[100vw]'>
        <div className='flex flex-row text-white gap-x-3 pl-4 min-w-fit'>
            {/* Song + Artist + Image */}
            <img src={currentAlbumImage} alt="Album Image" className='w-[50px] h-[50px] my-auto rounded-sm' />
            <div className='flex flex-col justify-center'>
                <h1 className='SpotifyLightFont font-extrabold'>{currentSong}</h1>
                <h2 className='SpotifyLightFont'>{currentArtist}</h2>
            </div>
        </div>
        <div className='flex flex-col py-4 w-full max-w-[800px]'>
            {/* Pause/play forward back */}
            <div className='flex flex-row gap-x-2 my-auto justify-center text-white mx-auto'>
                <button className=''>Shuffle</button>
                <button className=''>Back</button>
                <button onClick={playPause} className='w-20'>{playing}</button>
                <button className=''>Forward</button>
                <button className=''>Repeat</button>
            </div>
            {/* Song Slider */}
            <div className='w-full bg-white h-1 my-auto'></div>
        </div>
        {/* volume slider */}
        <div className='w-[100px] bg-white mx-3 h-1 my-auto'></div>
    </div>
  )
}

export default MusicPlayer