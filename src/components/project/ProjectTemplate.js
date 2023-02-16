import React, { useEffect, useState } from 'react';


import { BASE_URL, PROJECT } from '../../config/host-config';

import { getToken } from '../util/login-util';

import ProjectMain from '../project/ProjectMain'

import ProjectInput from './ProjectInput';

const ProjectTemplate = () => {

  const API_BASE_URL = BASE_URL + PROJECT;
  const ACCESS_TOKEN = getToken();


  const [projects, setProjects] = useState([]);

  const [users, setUsers] = useState([]);


  const headerInfo = {
    'content-type': 'application/json' 
    , 'Authorization': 'Bearer ' + ACCESS_TOKEN 
  };



  useEffect(() => {

    fetch(API_BASE_URL, {
        method: 'GET',
        headers: headerInfo
    })
        .then(res => {
          if (res.status === 403) {
            alert('로그인이 필요한 서비스입니다!');
            // 리다이렉트 재지정 필요
            window.location.href = '/login';
            return;
          } else if (res.status === 500) {
            alert('서버가 불안정합니다 ㅈㅅ');
            return;
          }
          return res.json();
        })
        .then(result => {
            // console.log(result)
            setProjects(result.list)
            
        });

        // console.log(projects);

  }, []);

  const selectProject = (id) => {
    window.location.href = `/detail/`+ id;
  };

  const selectAllUser = () => {

    fetch(API_BASE_URL+`/userlist`, {
        method: 'GET',
        headers: headerInfo
      })
      .then(res => {
        return res.json();
      })
      .then(result =>{
        setUsers(result.list);
        // console.log(result);
      })
      ;
    };

  const addProject = (project) => {
    console.log(project);
    fetch(API_BASE_URL, {
        method: 'POST',
        headers: headerInfo,
        body: JSON.stringify(project)
    })
    .then(res => res.json())

    .then(result => {
        console.log(result);
        setProjects(result.list);
    });
  };

  
  const viewPage = (
    <>
        <div className="project-template">
            <ProjectMain 
                projectList={projects}
                selectProject ={selectProject}
            />
        </div>
        <div>
            <ProjectInput add={addProject} selectAllUser={selectAllUser} userLists = {users}/> 
        </div>
    </>
  );


  return (
    <>
        {viewPage}
    </>
  );
};

export default ProjectTemplate;