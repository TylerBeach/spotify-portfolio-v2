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

// Correct the function signature to accept ProjectsProps
// There's no need to return a type for a React component function, so we remove the ': Project' part
const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <div>
            {projects.map((aProject, index) => ( // Added 'index' as key for each project item
               <div>

                    <h1>{aProject.title}</h1>
                    <p>{aProject.date}</p>
                    <img src={aProject.imageURL} alt="Project Image" />
                    {aProject.paragraphData.map((aParagraph, index) => ( // Added 'index' as key for each paragraph item
                        <div>
                            <h2>{aParagraph.paragraphTitle}</h2>
                            <p>{aParagraph.paragraphContent}</p>
                        </div>
                     ))}
                    {aProject.demoImages.map((aDemoImage, index) => ( // Added 'index' as key for each demo image item
                          <img src={aDemoImage} alt="Demo Image" />
                          ))}
                    <a href={aProject.link}>Link</a>
                </div>

            ))}
        </div>
)}

export default Projects;
