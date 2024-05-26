import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import TopNavButtons from './TopNavButtons'
import MusicPlayer from './MusicPlayer'
import Link from 'next/link'

function PageNotFound() {
    const project = null;
    const bannerColor = '';

  return (
    <div className="flex flex-col gap-x-2 bg-black justify-center items-center text-white text-center text-2xl max-w-[100vw] pb-[90px] min-h-[100vh] max-h-[100vh] md:pl-2 overflow-hidden">
      <h1 className='text-7xl pb-12'>404</h1>
      <h2>Page not found</h2>
      <h3 className='pb-12'>Oops! The page you are looking for does not exist. </h3>
      <Link href="/">
        <button  className='bg-white rounded-md w-[200px] h-[80px] text-black'>Back To Home</button>
      </Link>
    </div>
  )
}

export default PageNotFound