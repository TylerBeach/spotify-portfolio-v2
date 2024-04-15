import React from 'react';


interface Project {
    title: string;
    paragraphData: { paragraphTitle: string, paragraphContent: string }[];
    link: string;
    imageURL: string;
    demoImages: string[];
    date: string;
}

// Define the props expected by the Projects component
interface ProjectsProps {
    projects: Project[]; // This indicates that `projects` is an array of `Project`
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <div className='card_background text-white p-2 mt-4 mr-4 rounded-md font-SpotifyMedium max-w-[100vw]'>
            {projects.map((aProject, index) => ( // Added 'index' as key for each project item
               <div>
                    <div className='flex flex-row gap-x-4 mb-4'>
                        <img src={aProject.imageURL} alt="Project Image" />
                        <div className='flex flex-col justify-center'>
                           <h1 className='text-6xl font-SpotifyMedium'>{aProject.title}</h1>
                            <p className='text-md'>{aProject.date}</p>
                        </div>
                    </div>
                    {aProject.paragraphData.map((aParagraph, index) => ( 
                        <div className='flex flex-col mb-4'>
                            <h2 className='text-2xl'>{aParagraph.paragraphTitle}</h2>
                            <p>{aParagraph.paragraphContent}</p>
                        </div>
                     ))}
                     <div className='flex flex-row gap-3 flex-wrap '>
                    {aProject.demoImages.map((aDemoImage, index) => ( 
                          <img src={aDemoImage} alt="Demo Image" />
                          ))}
                    </div>
                    <a href={aProject.link}>Link</a>
                </div>

            ))}
        </div>
)}

export default Projects;
