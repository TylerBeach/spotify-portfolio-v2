import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

function TopNavButtons({backgroundColor}: any) { 

  const goBack = () => {
    window.history.back();
  };

  const goForward = () => {
    window.history.forward(); 
  }

  return (
    <div className={`fixed flex flex-row justify-between items-center top-0 top-buttons-width pl-4 h-auto py-4 pr-6 ${backgroundColor} text-white rounded-none md:rounded-md md:top-4 z-10`}>
        <div className='flex flex-row gap-x-4'>
            <img src="/images/arrow.png" onClick={goBack} alt="Back" className='bg-black rounded-full px-[4px] pt-[5px] w-[30px] h-[30px] rotate-90 hover:cursor-pointer' />
            <img src="/images/arrow.png" onClick={goForward} alt="Forward" className='bg-black rounded-full px-[4px] pt-[5px] w-[30px] h-[30px] -rotate-90 hover:cursor-pointer'/>
        </div>
        <div className='flex flex-row gap-x-4'>
            {/* <Link href="/about" ><button type="button">Whats New</button></Link> */}
            <Link href="/about" ><img src="/images/ProfileButtonImage.jpg" onClick={goForward} alt="Forward" className='rounded-full  w-[35px] h-[35px] outline-2 outline-black hover:cursor-pointer'/></Link>
        </div>
    </div>
  )
}

export default TopNavButtons