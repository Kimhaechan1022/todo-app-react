import React from 'react';
import ProjectItem from './ProjectItem';
import './ProjectMain.css';


const ProjectMain = ({ projectList ,selectProject}) => {


    return (

      <ul className="project-list">
          {
              projectList.map(project => 
              <ProjectItem 
                  key={project.projectId} 
                  project={project} 
                  selectProject={selectProject}
                  />)
          }
      </ul>

    );
  };
  
  export default ProjectMain;