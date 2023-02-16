import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import cn from 'classnames';
import './css/ProjectInput.css';
import Select from "react-select";

const ProjectInput = ({ add , selectAllUser, userLists}) => {


    
  const [user, setUser] = useState([])

  const [selectUser, setSelectUser] = useState({});

  
  // Project-input 박스를 렌더링할지 여부
  const [open, setOpen] = useState(false);

  // 입력폼에 입력한 데이터들을 담을 상태변수
  const [project, setProject] = useState({
    projectTitle: '',
    projectContent: '',
    userList : null
  });

  const {projectTitle, projectContent} = project;

  const onChange = (e) => {
    // console.log("onchange");
    // console.log(e);
    // console.log(e.name);
    const { value, name } = e.target;
    setProject({
      ...project,
      [name]: value
    });
  };

  
  // Project-input 박스를 열고 닫는 클릭이벤트 핸들러
  const inputToggle = () => {
    setOpen(!open);
    if(open===false){
        selectAllUser();
        const item = [];
        for(var key in userLists){
            item.push({label: userLists[key]['userName'] 
            + ' (email' +userLists[key]['email'] +')'
            ,  value: userLists[key]});
        }
        setUser(item);
  
    }

    };


  // 할 일 입력 후 엔터치면 서버로 POST요청을 보내는 이벤트 핸들러
  const projectAddHandler = e => {
    if (true) {

        // 입력데이터들을 읽기
       
        console.log(selectUser);

        const resultValueList = []
        for (var key in selectUser){
            resultValueList.push(selectUser[key].value);
        }
        
        const project2 = {
            ...project,
            userList : resultValueList
          };
        
        
        // 서버 요청 보내기
        add(project2);

        // 입력끝나면 입력칸 비우기
        setProject({
            ...project,
            projectTitle: '',
            projectContent: ''
        });
    }
  };

  const stopSubmit = e => e.preventDefault(); // 자동 서브밋 중지


  return (
    <>
        { open &&
            <div className="project-input">
                <form className="project-form" onSubmit={stopSubmit}>
                    <input 
                        id = "projectTitle"
                        name = "projectTitle"
                        type="text"
                        placeholder="제목 입력하기"
                        autoFocus
                        onChange={onChange}
                        value={projectTitle}
                        required
                    />
                    <input 
                        id = "projectContent"
                        name = "projectContent"
                        type="text"
                        placeholder="내용 입력하기"
                        autoFocus
                        onChange={onChange}
                        value={projectContent}
                        required
                    />
                    <Select
                        id = "members"
                        name = "members"
                        options={user}
                        isMulti
                        onChange={(event)=>{
                            setSelectUser(event);
                        }}
                        autoFocus
                    />
                    <button onClick = {projectAddHandler}>제출</button>
                </form>
                

            </div>
        }
        <button className={cn('begin-btn', {open})} onClick={inputToggle}>
            <MdAdd />
        </button>
    </>
  );
};

export default ProjectInput;