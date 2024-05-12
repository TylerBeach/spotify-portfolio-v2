import React, { useState } from 'react';
import data from '../data.json';

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
    
  const technologies = ["Python", "Javascript", "React"]

  return (
    <div className='flex flex-col gap-y-4 px-4'>
      <h1 className='text-white text-3xl'>Projects</h1>
      <div className='flex flex-col gap-y-4'>
        <div className='flex flex-row text-white gap-x-2'>
            {technologies.map((tech) =>
                selectedTech === tech ?
                <button onClick={() => handleFilterChange(tech)} className='rounded-xl w-fit pt-0.5 px-4 h-7 text-sm SpotifyLightFont bg-gray-500'>{tech}</button>
                :
                <button onClick={() => handleFilterChange(tech)} className='rounded-xl w-fit pt-0.5 px-4 h-7 filter-button text-sm SpotifyLightFont '>{tech}</button>
                )}    
          <button onClick={() => handleFilterChange('')}>All</button>
        </div>
        <div>
        {filteredProjects.map((project, index) => (
            <div key={index} className='hover-effect2 flex flex-row rounded-md w-full h-auto min-w-[350px] gap-x-6 pl-4 items-center SpotifyLightFont'>
            <h2 className='text-white brightness-50 w-2'>{index + 1}</h2>
            <img className='rounded-sm w-[35px] h-[35px] object-cover m-2' src={project.imageURL} alt="Tech Stack" />
            <h1 className='text-white text-xl SpotifyLightFont'>{project.title}</h1>
            <h3 className='text-white text-lg brightness-50 SpotifyLightFont'>{project.date}</h3>
          </div>
        ))}
        </div>        
      </div>
    </div>
  );
}

export default ProjectListView;
