import React from 'react'
import ProjectData from '../data.json';
import Link from 'next/link';
import { motion } from 'framer-motion';

function SquareCardContainer() {
  return (
    <div>
        <h1 className="text-white text-4xl my-3">Projects</h1>
        <div className='flex flex-row flex-wrap gap-x-6 w-[100%] overflow-auto'>
            {ProjectData.projects.slice(0, 7).map((project, index) => (
                <motion.div key={project.id} initial="hidden" animate="visible" variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0, 
                    transition: { delay: (2.2 + index * 0.1) } } }}>
                    <div key={index} className='card_background flex flex-col w-[160px] h-auto rounded-md text-white'>
                        <Link href={`/projects/${project.id}`} passHref>
                            <img className='w-[160px] h-[160px] rounded-md' src={project.imageURL} alt={project.title} />
                            <h1 className='p-1 text-xl SpotifyLightFont font-semibold'>{project.title}</h1>
                            <p className='p-1 SpotifyLightFont text-sm brightness-75'>{project.cardDescription}</p>
                        </Link>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default SquareCardContainer