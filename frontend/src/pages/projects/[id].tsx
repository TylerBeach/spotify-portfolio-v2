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
    <div className='bg-black max-w-[100vw] max-h-[100vh] min-h-[100vh] overflow-y-scroll'>
      {/* <Navbar/> */}
      <ProjectComponent project={project} />
    </div>
  );
}

export default ProjectDetail;
