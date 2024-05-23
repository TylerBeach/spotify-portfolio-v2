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
            <img src={imageURL} alt="Projects" className='h-[100px] w-[100px] md:h-[250px] md:w-[250px] rounded-md '/>
            <div className='flex flex-col justify-items-end justify-end'>
                <h1 className='text-white text-5xl md:text-7xl lg:text-8xl'>{title}</h1>
                <p className='text-white text-md SpotifyLightFont'>{subHeading}</p>
            </div>
        </div>


        <div style={{
                background: `linear-gradient(to bottom, rgb(${bannerColor}) 0%, rgb(18, 18, 18) 100%)`,
                height: "200px",
                width: "100%"
            }}
            >
        </div>
    </div>
  )
}
