import React from 'react'
import data from '../data.json'
export default function Coursework(): JSX.Element {
    return (
        <div className='flex flex-col'>
            {data.about.courseWork.map((course, index) => (
                Object.entries(course).map(([key, value]) => (
                <div key={index} className='flex flex-row text-white SpotifyLightFont text-sm gap-x-2'>
                    <h2 className='text-nowrap'>{key}</h2>
                    <h2>{value}</h2>
                </div>
                ))
            ))}

        </div>
    )
}
