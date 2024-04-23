import React from 'react';
import {useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TopNavButtons from '../Components/TopNavButtons';
import getAverageColor from '../utils/getAverageColor';
import getDominantColor from '../utils/getDominantColor';
interface Project {
    id: string;
    title: string;
    cardDescription: string;
    paragraphData: { paragraphTitle: string, paragraphContent: string }[];
    link: string;
    imageURL: string;
    bannerURL: string;
    demoImages: string[];
    techStack: string[];
    date: string;
  }
  
  interface ProjectProps {
    project: Project;
  }

  const ProjectComponent: React.FC<ProjectProps> = ({ project }) => {

    // get the dominant color from the banner image and set it for a nice fade effect
    const [bannerColor, setBannerColor] = useState('');
    useEffect(() => {
        getDominantColor(`${project.bannerURL}`, (averageColorHex:any) => {
            console.log('Average Color in Hex:', averageColorHex);
            setBannerColor(averageColorHex);
        });
    }, []);



    return (
        <div className='card_background text-white rounded-md font-SpotifyMedium max-w-[100vw]'>

            {/* image banner + title and date */}
            <div  style={{ backgroundImage: `url(${project.bannerURL})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }} 
                className='flex flex-col justify-between w-full h-[400px]'>
                < TopNavButtons />
                <div className='flex flex-row gap-x-4 mb-4'>
                    <div className='flex flex-col justify-center'>
                        <h3 className="text-white text-4xl pl-4 font-bold md:text-7xl"> {project.title} </h3>
                        <p className="text-white text-2xl SpotifyLightFont font-medium pl-4 pb-4 md:text-2xl">{project.date}</p>
                    </div>
                </div>
            </div>

            {/* gradient color background from image banner */}
            <div style={{
                background: `linear-gradient(to bottom, rgb(${bannerColor}) 0%, rgb(18, 18, 18) 100%)`,
                height: "200px",
                width: "100%"
            }}
            >
            </div>

            {/* project paragraphs */}
            <div className='px-4 flex flex-col w-full mt-[-100px]'>
                {project.paragraphData.map((aParagraph, index) => (
                    <div key={index} className='flex flex-col mb-4'>
                        <h2 className='text-2xl'>{aParagraph.paragraphTitle}</h2>
                        <p className='SpotifyLightFont'>{aParagraph.paragraphContent}</p>
                    </div>
                ))}
            </div>
            
            {/* project images */}
            <div className='px-4 flex flex-row gap-3 flex-wrap gap-x-4 lg:justify-evenly'>
                {project.demoImages.map((aDemoImage, index) => (
                    <img className='h-auto w-[100%] md:min-w-[500px] lg:w-[40%] lg:min-w-[600px]' src={aDemoImage} alt="Demo Image" key={index} />
                ))}
            </div>

            {/* project tech stack */}
            <div className='px-4 flex flex-col my-4'>
                <h2 className='text-2xl'>Tech Stack</h2>

                {project.techStack.map((techStack, index) => (
                    <div key={index} className='hover-effect flex flex-row rounded-md w-[100%] h-auto min-w-[300px] gap-x-6 pl-6 items-center SpotifyLightFont'>
                        <h2 className='text-gray-400 w-2'>{index}</h2>
                        <img className='rounded-md w-[50px] h-[50px] object-contain m-2 ' src={`/images/techStack/${techStack}.png`} alt="Tech Stack"/>
                        <h1 className='text-white font-semibold text-xl'>{techStack}</h1>
                    </div>
                ))}
            </div>
                
            {/* project github link */}
            <a href={project.link} className='px-4'>Link</a>
        </div>
    );
}

export default ProjectComponent;
