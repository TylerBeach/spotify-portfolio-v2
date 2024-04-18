import React from 'react'
import {motion } from "framer-motion";
import Link from 'next/link';


interface Project {
    id: string;
    title: string;
    cardDescription: string;
    paragraphData: { paragraphTitle: string, paragraphContent: string }[];
    link: string;
    imageURL: string;
    demoImages: string[];
    techStack: string[];
    date: string;
  }
  
  interface ProjectsProps {
    projects: Project[]; 
  }


  const ProjectCard: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <div className='grid grid-cols-1 flex-wrap gap-4 lg:grid-cols-2 xl:grid-cols-3'>
        {projects.map((project, index) => (
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, 
              transition: { delay: (1.3 + index * 0.1) } } }}>
              <Link key={project.id} href={`/projects/${project.id}`} passHref>
            <div className='project_box card_background flex flex-row rounded-md h-24 w-[100%] min-w-[300px] lg:w-[95%] xl:w-[90%]'>
              <img className='rounded-md rounded-tr-none rounded-br-none w-[100px] object-cover h-full ' src={project.imageURL} alt={project.title}/>
              <h1 className='text-white text-2xl my-auto ml-3'>{project.title}</h1>
              <h3 className='text-white'>{project.cardDescription}</h3>
            </div>
          </Link>
          </motion.div>
        ))}
      </div>
  )
}

export default ProjectCard