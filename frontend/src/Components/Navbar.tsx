import React from 'react'




function Navbar() {
  const navbarInfo = {
    "sectionOne": [
        {
          "Title": "Home",
          "Icon": "https://placehold.co/400"
        },
        {
          "Title": "Search",
          "Icon": "https://placehold.co/400"
        }
      ],
    "Contact Me": [
            {
                "Title": "LinkedIn",
                "Icon": "https://placehold.co/400"
              },
              {
                "Title": "Github",
                "Icon": "https://placehold.co/400"
              },
              {
                "Title": "Email",
                "Icon": "https://placehold.co/400"
              },
              {
                "Title": "Resume",
                "Icon": "https://placehold.co/400"
              }
        ],
    "Spotify Playlists": [ 
            {
            "Title": "My Spotify",
            "Icon": "https://placehold.co/400"
          },
          {
            "Title": "Lofi",
            "Icon": "https://placehold.co/400"
          },
          {
            "Title": "Chilling",
            "Icon": "https://placehold.co/400"
          }
        ]
      }
        


  return (
    <div className='fixed h-[100vh] w-[300px] bg-black text-white flex flex-col p-2 overflow-auto hide-scrollbar'>
        <div className='flex flex-col p-2 gap-y-4'>
            {Object.entries(navbarInfo).map(([sectionName, items], index) => (
            <div className='flex flex-col rounded-md bg-[#121212] p-2 gap-y-3 text-lg pl-3 pt-3 pb-3' key={sectionName}>
            {/* Conditionally render the section name, skip if it's the first section */}
            {index !== 0 && <h2 className='text-3xl mt-2'>{sectionName}</h2>}
            <ul className='flex flex-col gap-y-5'>
                {items.map(item => (
                <li className="flex flex-row gap-x-4 items-center" key={item.Title}>
                    {/* Replace the span with your actual icon and title rendering */}
                    <img className="w-[50px] h-[50px] rounded-3xl" src={item.Icon} alt={item.Title} />
                    <span className='text-2xl'>{item.Title}</span>
                </li>
                ))}
            </ul>
            </div>
            ))}
           
        </div>
    </div>
  )
}

export default Navbar