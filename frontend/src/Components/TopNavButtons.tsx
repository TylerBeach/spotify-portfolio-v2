import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

function TopNavButtons() { 
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const goForward = () => {
    router.forward();
  }

  return (
    <div className='flex flex-row justify-between items-center w-[100%] h-auto text-white top-4 pl-[0px] pr-[16px] z-10'>
        <div className='flex flex-row gap-x-4'>
            <button onClick={goBack} type="button">Back</button>
            <button onClick={goForward} type="button">Forward</button>
        </div>
        <div className='flex flex-row gap-x-4'>
            <Link href="/about" ><button type="button">Whats New</button></Link>
            <Link href="/about" ><button type="button">Profile</button></Link>
        </div>
    </div>
  )
}

export default TopNavButtons