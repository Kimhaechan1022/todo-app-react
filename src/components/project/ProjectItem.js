import React, { useState } from 'react';

import { MdDone, MdDelete, MdUpdate, MdCheck } from 'react-icons/md';
import cn from 'classnames';

import {BASE_URL, PROJECT} from '../../config/host-config'

import './ProjectItem.css';

import { getToken } from '../util/login-util';

const ProjectItem = ({project, selectProject}) =>{

    const {projectId, projectTitle, createDate,done, memberCount, members} = project;

    const MoveClickHandler = e =>{
      selectProject(projectId);
      console.log("click");
    }

    function membersToListTag(members) {
      const listItems = members.map((member) =>
        <li>{member}</li>
      );
      return (
        <ul>{listItems}</ul>
      );
    }

    return(
        <li className={cn('project-item', {active: done})} onClick={MoveClickHandler}>
            <div class= "project-items">
                <div className={cn('pj-title')}>{projectTitle} </div>
                <div className={cn('text')}>{createDate} </div>
                <div className={cn('text')}>인원수: {memberCount} </div>
                <div className={cn('text')}>참여자: {membersToListTag(members)}</div>
            </div>
            <button class = "move-detail-page-btn">
                <span> 프로젝트 삭제</span>
            </button>
        </li>
    );
}



export default ProjectItem;