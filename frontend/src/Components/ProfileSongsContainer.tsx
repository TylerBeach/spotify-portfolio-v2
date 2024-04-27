import React from 'react'
import data from '../data.json'

const aboutData = data.about;

function ProfileSongsContainer() {
  return (
    <div className='flex flex-col gap-y-4 text-white'>
        <h1 className='text-2xl'>Popular</h1>
        
        <div className='flex flex-col gap-y-2 w-full h-fit text-white ml-4 mr-4'>
            {aboutData.paragraphs.map((paragraph, index) => (
                <div key={index} className='flex flex-row rounded-md w-[95%] min-w-[300px] gap-x-6 items-center SpotifyLightFont hover-effect2 p-2'>
                    <h2 className='text-gray-400 w-2'>{index+1}</h2>
                    <img className='rounded-md w-[50px] h-[50px] object-cover' src={paragraph.image} alt={paragraph.title}/>
                    <h1 className='text-white font-semibold text-xl text-nowrap'>{paragraph.title}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProfileSongsContainer