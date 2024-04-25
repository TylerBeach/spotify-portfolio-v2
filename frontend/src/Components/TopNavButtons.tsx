import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

function TopNavButtons() { 
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const goForward = () => {
    window.history.forward(); 
  }

  return (
    <div className='flex flex-row justify-between items-center w-[100%] h-auto text-white top-4 pl-[0px] pr-[16px] z-10'>
        <div className='flex flex-row gap-x-4'>
            <img src="/images/arrow.png" onClick={goBack} alt="Back" className='bg-black rounded-full px-[4px] pt-[5px] w-[30px] h-[30px] rotate-90 hover:cursor-pointer' />
            <img src="/images/arrow.png" onClick={goForward} alt="Forward" className='bg-black rounded-full px-[4px] pt-[5px] w-[30px] h-[30px] -rotate-90 hover:cursor-pointer'/>
        </div>
        <div className='flex flex-row gap-x-4'>
            <Link href="/about" ><button type="button">Whats New</button></Link>
            <Link href="/about" ><button type="button">Profile</button></Link>
        </div>
    </div>
  )
}

export default TopNavButtons