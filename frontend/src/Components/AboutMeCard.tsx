import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
function AboutMeCard() {
  return (
    <div className='w-[100%] h-auto'>
           <motion.div initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0, 
              transition: { delay: 1.2 } } }}>

        <h2 className="text-white text-4xl my-4">Featured Developer </h2>
        <Link href="/about" passHref>
            <div className='h-[200px] card_background'>
            <h3>Tyler</h3>
        
        
            </div>
        </Link>
        </motion.div>
    </div>
  )
}

export default AboutMeCard