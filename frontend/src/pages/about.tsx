import React from 'react'
import Link from 'next/link'
import Navbar from '@/Components/Navbar'
function about() {
  return (
    <div className='flex flex-row pt-4 bg-black w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto'>
        < Navbar />
        <div className='w-full mr-4 pl-[300px] h-auto'>
            <div className='flex flex-col justify-end about-background-image h-[350px]  w-full'>
                <div className='flex flex-row pb-4'>
                    <img src='/images/Verified.png' alt='Tyler Beach' className=' h-[30px] w-[30px]'/>
                    <h2 className='text-white SpotifyLightFont font-medium text-1xl my-auto'>Verified Developer </h2>
                </div>
                <h3 className='text-white text-7xl pl-4 pb-4 font-bold'>TYLER BEACH</h3>
            </div>
        </div>


    </div>
  )
}

export default about