import React from 'react'
import navbarData from "../navbarData.json"



function Navbar() {
  const navbarInfo = navbarData;
        
  return (
    <div className='hidden md:flex fixed h-[100vh] w-full max-w-[300px] bg-black text-white flex-col'>
        <div className='flex flex-col gap-y-2 overflow-y-scroll mb-[104px] scroll-hidden'>
            {Object.entries(navbarInfo).map(([sectionName, items], index) => (
            <div className='flex flex-col rounded-md bg-[#121212] p-2 gap-y-3 text-lg pt-3 ' key={sectionName}>
            {/* Conditionally render the section name, skip if it's the first section */}
            {index !== 0 && <h2 className='text-3xl pt-2'>{sectionName}</h2>}
            <ul className='flex flex-col gap-y-5'>
                {items.map(item => (
                <a className="hover-effect flex flex-row gap-x-4 p-2 rounded-md items-center min-h-[50px]" key={item.Title} href={item.Link}>
                    <img style={index===0 ? {borderRadius:"5px", height:"30px", width:"30px"} : {}} className="w-[50px] h-[50px] object-cover rounded-3xl" src={item.Icon} alt={item.Title} />
                    <span className='text-2xl pt-1'>{item.Title}</span>
                </a>
                ))}
            </ul>
            </div>
            ))}
           
        </div>
    </div>
  )
}

export default Navbar