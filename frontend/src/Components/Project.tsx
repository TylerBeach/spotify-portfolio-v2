import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TopNavButtons from '../Components/TopNavButtons';
import getAverageColor from '../utils/getAverageColor';
import getDominantColor from '../utils/getDominantColor';
import { Project } from "../interfaces/project";
import ModalImage from "react-modal-image";
import SquareCardGeneric from './SquareCardGeneric';
import ImageModal from './ImageModal';
import Image from 'next/image';

interface ProjectProps {
    project: Project;
}

const ProjectComponent: React.FC<ProjectProps> = ({ project }) => {
    const [bannerColor, setBannerColor] = useState('');
    
    useEffect(() => {
        getDominantColor(`${project.bannerURL}`, (averageColorHex: any) => {
            console.log('Average Color in Hex:', averageColorHex);
            setBannerColor(averageColorHex);
        });
    }, [project.bannerURL]);

    return (
        <div className='card_background text-white rounded-md font-SpotifyMedium h-full pb-10' >
            <div style={{ backgroundImage: `url(${project.bannerURL})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} 
                className='flex flex-col align-baseline justify-end w-full h-[400px] md:rounded-t-md'>
                <div className='flex flex-row gap-x-4 mb-4'>
                    <div className='flex flex-col justify-center'>
                        <h3 className="text-white text-4xl pl-4 font-bold md:text-7xl"> {project.title} </h3>
                        <p className="text-white text-2xl SpotifyLightFont font-medium pl-4 pb-4 md:text-2xl">{project.date}</p>
                    </div>
                </div>
            </div>

            <div style={{
                background: `linear-gradient(to bottom, rgb(${bannerColor}) 0%, rgb(18, 18, 18) 100%)`,
                height: "200px",
                width: "100%"
            }}>
            </div>

            <div className='h-auto w-full flex flex-row flex-wrap gap-y-4 justify-between px-4 my-4 mt-[-100px]'>
                <div className='flex flex-col w-[50%]'>
                    <h2 className='text-2xl text-nowrap mb-2'>Technologies Used</h2>
                    {project.techStack && project.techStack.map((techStack, index) => (
                        <div key={index} className='hover-effect2 flex flex-row rounded-md w-full h-auto min-w-[350px] gap-x-6 pl-2 md:pl-6 items-center SpotifyLightFont'>
                            <h2 className='text-gray-400 w-2'>{index+1}</h2>
                            <Image className='rounded-md w-[35px] h-[35px] object-contain m-2' src={`/images/techStack/${techStack}.png`} alt="Tech Stack" width={35} height={35}/>
                            <h1 className='text-white text-xl SpotifyLightFont'>{techStack}</h1>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col rounded-md w-[600px] h-auto items-top'>
                    <a className='text-2xl'>Link to Repository</a>
                    <a href={project.link ? project.link : "/"}>
                        <Image className='rounded-sm w-[75px] h-[75px] object-contain' width={75} height={75} src='/images/Github.png' alt="Github"/>
                    </a>
                </div>
            </div>

            <div className='px-4 flex flex-col w-full'>
                {project.paragraphData && project.paragraphData.map((aParagraph, index) => (
                    <div key={index} className='flex flex-col mb-4'>
                        <h2 className='text-2xl'>{aParagraph.paragraphTitle}</h2>
                        <p className='SpotifyLightFont' dangerouslySetInnerHTML={{ __html: aParagraph.paragraphContent }}></p>
                    </div>
                ))}
            </div>

            {project.demoImages && project.demoImages.length > 0 && 
                <div className='px-4 flex flex-col w-full'>
                    <h2 className='text-2xl'>Demo Images</h2>
                    <div className='flex flex-row w-full overflow-y-hidden h-[220px] max-h-[240px] min-h-[220px] gap-x-2 overflow-x-auto horizontalScroller'>
                        {project.demoImages.map((aDemoImage, index) => (
                            <ImageModal key={index} imageURL={aDemoImage.image} caption={aDemoImage.caption}/>                            
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

export default ProjectComponent;
