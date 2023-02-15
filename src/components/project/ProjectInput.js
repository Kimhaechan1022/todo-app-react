import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import cn from 'classnames';
import './css/ProjectInput.css';
import Select from "react-select";

const ProjectInput = ({ add , selectAllUser, userList}) => {


    
  const [user, setUser] = useState([])

  const [selectUser, setSelectUser] = useState({});

  
  // Project-input 박스를 렌더링할지 여부
  const [open, setOpen] = useState(false);

  // 입력폼에 입력한 데이터들을 담을 상태변수
  const [project, setProject] = useState({
    title: '',
    contents: '',
    // members : null
  });

  const {title, contents, members} = project;  //members

  const onChange = (e) => {
    
    console.log(e.target);
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
        for(var key in userList){
            item.push({label: userList[key]['userName'] 
            + ' (email' +userList[key]['email'] +')'
            ,  value: userList[key]});
        }
        setUser(item);
        console.log(user);
  
    }

    };


  // 할 일 입력 후 엔터치면 서버로 POST요청을 보내는 이벤트 핸들러
  const projectAddHandler = e => {
    if (true) {

        // 입력데이터들을 읽기
        console.log(project);

        // // 서버 요청 보내기
        // add(project);

        // // 입력끝나면 입력칸 비우기
        // setProject({
        //     ...project,
        //     title: '',
        //     contents: '',
        // });
    }
  };

  const stopSubmit = e => e.preventDefault(); // 자동 서브밋 중지


  return (
    <>
        { open &&
            <div className="project-input">
                <form className="project-form" onSubmit={stopSubmit}>
                    <input 
                        id = "title"
                        name = "title"
                        type="text"
                        placeholder="제목 입력하기"
                        autoFocus
                        onChange={onChange}
                        value={title}
                        required
                    />
                    <input 
                        id = "contents"
                        name = "contents"
                        type="text"
                        placeholder="내용 입력하기"
                        autoFocus
                        onChange={onChange}
                        value={contents}
                        required
                    />
                    <Select
                        id = "members"
                        name = "members"
                        // type="Select"
                        options={user}
                        isMulti
                        onChange={setSelectUser}
                        autoFocus
                        value={members}
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