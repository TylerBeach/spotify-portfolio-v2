import React from 'react';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  paragraphData: { paragraphTitle: string, paragraphContent: string }[];
  link: string;
  imageURL: string;
  demoImages: string[];
  date: string;
}

interface ProjectsProps {
  projects: Project[]; // This indicates that `projects` is an array of `Project`
}

const ProjectsContainer: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className='mt-4 mr-4 flex flex-col gap-4'>
      <h1 className='text-white text-4xl font-SpotifyBold'>Projects</h1>
      <div className='grid grid-cols-1 flex-wrap gap-4 lg:grid-cols-2 xl:grid-cols-3'>
        {projects.map((project, index) => (
          <Link key={project.id} href={`/projects/${project.id}`} passHref>
            <div className='card_background flex flex-row rounded-md h-32 w-[100%] min-w-[300px] lg:w-[95%] xl:w-[90%]'>
              <img className='rounded-md rounded-tr-none rounded-br-none' src={project.imageURL} alt={project.title}/>
              <h1 className='text-white text-2xl my-auto ml-3'>{project.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProjectsContainer;
