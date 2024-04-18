import React from 'react';
import {useState} from 'react';
import { motion } from 'framer-motion';


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
  
  interface ProjectProps {
    project: Project;
  }

  

  const ProjectComponent: React.FC<ProjectProps> = ({ project }) => {
    
    const [isPaused, setIsPaused] = useState(false);
    
    return (
        
        <div className='p-4 card_background text-white rounded-md font-SpotifyMedium max-w-[100vw]'>
            <div className='flex flex-row gap-x-4 mb-4'>
                <img className='w-[100px] sm:w-[150px] md:w-[250px] lg:w-[350px]' src={project.imageURL} alt="Project Image" />
                <div className='flex flex-col justify-center'>
                    <h1 className='text-3xl md:text-4xl lg:text-6xl font-SpotifyMedium'>{project.title}</h1>
                    <p className='text-md'>{project.date}</p>
                </div>
            </div>
            {project.paragraphData.map((aParagraph, index) => (
                <div key={index} className='flex flex-col mb-4'>
                    <h2 className='text-2xl'>{aParagraph.paragraphTitle}</h2>
                    <p className='SpotifyLightFont'>{aParagraph.paragraphContent}</p>
                </div>
            ))}
            <div className='flex flex-row gap-3 flex-wrap gap-x-4 lg:justify-evenly'>
                {project.demoImages.map((aDemoImage, index) => (
                    <img className='h-auto w-[100%] md:min-w-[500px] lg:w-[40%] lg:min-w-[600px]' src={aDemoImage} alt="Demo Image" key={index} />
                ))}
            </div>
            <div className='flex flex-row gap-x-4 p-4 my-4 card_background_light rounded-md overflow-y-hidden relative w-full scroll-smooth'>

          
                {project.techStack.map((techStack, index) => (
                    <div className='flex flex-col p-4 card_background_lightest rounded-md justify-between min-w-[100px]'>
                        <img className='w-[100px] rounded-lg' src={`/images/${techStack}.png`} alt="Tech Stack" />
                        <h3 key={index} className='text-white text-center'>{techStack}</h3>
                    </div>
                ))}


            </div>
            <a href={project.link}>Link</a>
        </div>
    );
}

export default ProjectComponent;
