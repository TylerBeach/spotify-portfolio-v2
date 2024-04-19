import React from 'react'



// fake data has image and title 
const fakeData = {
    "songs": [
        {"image": "https://placehold.co/400", "title": "Song 1"},
        {"image": "https://placehold.co/400", "title": "Song 2"},
        {"image": "https://placehold.co/400", "title": "Song 3"},
        {"image": "https://placehold.co/400", "title": "Song 4"},
        {"image": "https://placehold.co/400", "title": "Song 5"},
    ]
}



function ProfileSongsContainer() {
  return (
    <div className='flex flex-col gap-y-4 text-white'>
        <h1 className='text-2xl'>Popular</h1>
        <div className='flex flex-col gap-y-4 w-full h-fit text-white ml-4'>
            {fakeData.songs.map((song, index) => (
                <div key={index} className='flex flex-row rounded-md w-[100%] h-[50px] min-w-[300px] gap-x-6 items-center SpotifyLightFont'>
                    <h2 className='text-gray-400 w-2'>{index}</h2>
                    <img className='rounded-md w-[50px] h-[50px] object-cover' src={song.image} alt={song.title}/>
                    <h1 className='text-white font-semibold text-xl'>{song.title}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProfileSongsContainer