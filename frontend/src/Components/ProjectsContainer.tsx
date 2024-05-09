import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Project } from '../interfaces/project';


interface ProjectsProps {
  projects: Project[]; // This indicates that `projects` is an array of `Project`
}

const ProjectsContainer: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      <motion.div initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0, 
              transition: { delay: 1.2 } } }}>
        <h1 className='text-white text-4xl font-SpotifyBold'>Projects</h1>
      </motion.div>
      <ProjectCard projects={projects} /> 
    </div>
  )
}

export default ProjectsContainer;
