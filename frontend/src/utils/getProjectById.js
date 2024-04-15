import jsonData from '../data.json';


function getProjectByID(id){
    const data = jsonData;
    const project = data.projects.find(project => project.id === id);
    return project;
}

export default getProjectByID;