// [id].tsx
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import projectsData from '../../data.json'; // Assuming this imports correctly
import ProjectComponent from '../../Components/Project'; // Adjust the import path as needed
import Navbar from '@/Components/Navbar';
import TopNavButtons from '@/Components/TopNavButtons';
import Footer from '@/Components/Footer';

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
    <div className='flex flex-row  bg-black max-w-[100vw]  min-h-[100vh] pr-4 pt-4'>
      <Navbar/>
      <div className='mb-14 ml-4 rounded-md md:ml-[300px] md:pl-0 card_background h-auto'>
        <ProjectComponent project={project} />
      </div>
      
    </div>
  );
}

export default ProjectDetail;
