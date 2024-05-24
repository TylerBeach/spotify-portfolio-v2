import React, { useState , useEffect } from 'react'
import getDominantColor from '@/utils/getDominantColor'
import data from '../data.json'

export default function PageHeader({title, subHeading, imageURL} : {title: string, subHeading: string, imageURL: string}) {
    const [bannerColor, setBannerColor] = useState('');
    useEffect(() => {
        getDominantColor(`${imageURL}`, (averageColorHex:any) => {
            console.log('Average Color in Hex:', averageColorHex);
            setBannerColor(averageColorHex);
        });
    }, []);
  
    return (
    <div className='w-full h-auto'>
        <div style={{ backgroundColor: `rgb(${bannerColor})`}} className='w-full h-fit pt-[75px] p-5 gap-x-6  flex flex-row content-baseline align-baseline'>
            <img src={imageURL} alt="Projects" className='w-[20%] min-w-[100px] h-auto rounded-md max-w-[250px]'/>
            <div className='w-[80%] flex flex-col justify-items-end justify-end'>
                <h1 className='text-white text-4xl md:text-5xl lg:text-7xl text-nowrap'>{title}</h1>
                <p className='pl-1 text-white text-md SpotifyLightFont'>{subHeading}</p>
            </div>
        </div>


        <div style={{
                marginTop: '-1px',
                background: `linear-gradient(to bottom, rgb(${bannerColor}) 0%, rgb(18, 18, 18) 100%)`,
                height: "200px",
                width: "100%"
            }}
            >
        </div>
    </div>
  )
}
