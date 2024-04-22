import React from 'react'
import ProjectData from '../data.json';
import Link from 'next/link';
import { motion } from 'framer-motion';

function SquareCardContainer() {
  return (
    <div>
        <h1 className="text-white text-4xl my-3">Projects</h1>
        <div className='flex flex-row flex-wrap gap-x-6 w-[100%] h-min overflow-y-hidden'>
            {ProjectData.projects.slice(0, 7).map((project, index) => (
                <motion.div key={project.id} initial="hidden" animate="visible" variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0, 
                    transition: { delay: (2 + index * 0.1) } } }}>
                        <Link href={`/projects/${project.id}`} passHref>
                    <div key={index} className='hover-effect card_background p-2.5 gap-y-1 flex flex-col w-[180px] h-auto rounded-md text-white'>
                            <img className='w-[100%] h-[160px] rounded-md' src={project.imageURL} alt={project.title} />
                            <h1 className='text-xl SpotifyLightFont font-semibold'>{project.title}</h1>
                            <p className='SpotifyLightFont text-sm brightness-75'>{project.cardDescription}</p>
                    </div>
                        </Link>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default SquareCardContainer