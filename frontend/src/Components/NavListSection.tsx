import React from 'react'

function NavListSection({ imageURL, title, link} : {imageURL: string, title: string, link: string}) {
  return (
    <div>
        <a className="hover-effect flex flex-row gap-x-4 px-0.5 rounded-md items-center min-h-[50px]" href={link} target={(link.includes("spotify") || link.includes("linkedin") || link.includes("github")) ? '_blank' : '_self'}>
            <img
            className="w-[40px] h-[40px] p-1 object-cover rounded-md"
            src={imageURL}
            alt={title}
            />
            <h2 className="text-xl pt-1 SpotifyLightFont">{title}</h2>
        </a>
    </div>
  )
}


export default NavListSection;