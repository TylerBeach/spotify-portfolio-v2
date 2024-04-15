import React from 'react';

interface Project {
    id: string;
    title: string;
    paragraphData: { paragraphTitle: string, paragraphContent: string }[];
    link: string;
    imageURL: string;
    demoImages: string[];
    date: string;
  }
  
  interface ProjectProps {
    project: Project;
  }

  

  const ProjectComponent: React.FC<ProjectProps> = ({ project }) => {
    return (
        
        <div className='p-4 m-4 card_background text-white rounded-md font-SpotifyMedium max-w-[100vw]'>
            <div className='flex flex-row gap-x-4 mb-4'>
                <img className='w-[300px]' src={project.imageURL} alt="Project Image" />
                <div className='flex flex-col justify-center'>
                    <h1 className='text-6xl font-SpotifyMedium'>{project.title}</h1>
                    <p className='text-md'>{project.date}</p>
                </div>
            </div>
            {project.paragraphData.map((aParagraph, index) => (
                <div key={index} className='flex flex-col mb-4'>
                    <h2 className='text-2xl'>{aParagraph.paragraphTitle}</h2>
                    <p>{aParagraph.paragraphContent}</p>
                </div>
            ))}
            <div className='flex flex-row gap-3 flex-wrap gap-x-4 lg:justify-evenly'>
                {project.demoImages.map((aDemoImage, index) => (
                    <img className='h-auto w-[100%] md:min-w-[500px] lg:w-[40%] lg:min-w-[600px]' src={aDemoImage} alt="Demo Image" key={index} />
                ))}
            </div>
            <a href={project.link}>Link</a>
        </div>
    );
}

export default ProjectComponent;
