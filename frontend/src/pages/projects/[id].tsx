// [id].tsx
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import projectsData from '../../data.json'; // Assuming this imports correctly
import ProjectComponent from '../../Components/Project'; // Adjust the import path as needed
import Navbar from '@/Components/Navbar';

interface Project {
  id: string;
  title: string;
  paragraphData: { paragraphTitle: string, paragraphContent: string }[];
  link: string;
  imageURL: string;
  demoImages: string[];
  techStack: string[];
  date: string;
}


const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (typeof id === 'string') {
      const foundProject = projectsData.projects.find(p => p.id === id);
      setProject(foundProject || null);
    }
  }, [id]);

  if (!project) {
    return <div>No project found or loading...</div>;
  }

  return (
    <div className='flex flex-row bg-black max-w-[100vw] max-h-[100vh] min-h-[100vh] overflow-y-scroll pr-4 pt-4'>
      <Navbar/>
      <div className='pl-4 md:pl-[300px]'>
        <ProjectComponent project={project} />
      </div>
    </div>
  );
}

export default ProjectDetail;
