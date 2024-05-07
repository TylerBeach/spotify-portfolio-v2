import React from 'react'
import {motion } from "framer-motion";
import Link from 'next/link';
import { Project } from '../interfaces/project';
  
  interface ProjectsProps {
    projects: Project[]; 
  }


  const ProjectCard: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <div className='w-full grid grid-cols-1 flex-wrap gap-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4'>

        {projects.map((project, index) => (
          <motion.div className='w-full' key={project.id} initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, 
            transition: { delay: (1.3 + index * 0.1) } } }}>

            <Link className='project_box card_background_light flex flex-row rounded-md h-20 w-[100%] lg:w-[100%] lg:max-w-[100%] xl:w-[100%]' href={`/projects/${project.id}`} passHref>
                <img className='rounded-md rounded-tr-none rounded-br-none w-[80px] object-cover h-full ' src={project.imageURL} alt={project.title}/>
                <h1 className='text-white text-2xl my-auto ml-3'>{project.title}</h1>
                {/* <h3 className='text-white'>{project.cardDescription}</h3> */}
            </Link>

          </motion.div>
        ))}
      </div>
  )
}

export default ProjectCard