import React, { useState } from 'react';
import data from '../data.json';
import Link from 'next/link';

function ProjectListView() {
  const [selectedTech, setSelectedTech] = useState('');

  const handleFilterChange = (tech: any) => {
    setSelectedTech(tech);
  };

  const filteredProjects = selectedTech
    ? data.projects.filter((project) =>
        project.techStack.includes(selectedTech)
      )
    : data.projects;
    
  const technologies = ["Python", "Javascript", "React", "Java"]

  return (
    <div className='flex flex-col gap-y-4 px-2 md:px-4'>
      <div className='flex flex-col gap-y-4'>
        {/* Filtering Buttons and Logic */}
        <div className='flex flex-row text-white gap-x-2'>
            <button onClick={() => handleFilterChange('')} className='rounded-xl w-fit pt-0.5 px-4 h-7 filter-button text-sm SpotifyLightFont '>All</button>
            {technologies.map((tech, index) =>
                selectedTech === tech ?
                <button key={index} onClick={() => handleFilterChange(tech)} className='rounded-xl w-fit pt-0.5 px-4 h-7 filter-button-selected text-sm SpotifyLightFont '>{tech}</button>
                :
                <button key={index} onClick={() => handleFilterChange(tech)} className='rounded-xl w-fit pt-0.5 px-4 h-7 filter-button text-sm SpotifyLightFont '>{tech}</button>
                )}    
        </div>


        <div>
        {/* Table Explanation */}
        <div className=' flex flex-row rounded-md w-full h-auto min-w-[350px] gap-x-6 pl-4 items-center SpotifyLightFont'>
            <h2 className='text-white brightness-50 w-2 text-xs'>#</h2>
            <div className='flex flex-row flex-1 items-center'>
                <h2 className='text-white brightness-50 w-[35px] m-2 text-xvs'> </h2>
                <h1 className='flex-1 text-white brightness-50 text-sm pl-1 SpotifyLightFont '>Title</h1>
            </div>
            <h3 className='flex-1 text-white brightness-50 text-sm SpotifyLightFont'>Date Created</h3>
        </div>


        {/* Divider */}
        <div className='divider w-full my-2'></div>
        
        
        {/* Project List */}
        {filteredProjects.map((project, index) => (
          <Link href={`/projects/${project.id}`} key={index} className='hover-effect flex flex-row rounded-md w-full h-auto min-w-[350px] gap-x-6 pl-4 items-center SpotifyLightFont'>
            <h2 className='text-white brightness-50 w-2'>{index + 1}</h2>
            <div className='flex flex-row flex-1 items-center gap-x-1'>
                <img className=' rounded-sm w-[35px] h-[35px] object-cover m-2' src={project.imageURL} alt="Tech Stack" />
                <h1 className='flex-1 text-white text-xl SpotifyLightFont'>{project.title}</h1>
            </div>
            <h3 className='flex-1 text-white text-lg brightness-50 SpotifyLightFont'>{project.date}</h3>
          </Link>
        ))}
        </div>        
      </div>
    </div>
  );
}

export default ProjectListView;
