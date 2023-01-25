import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './css/TodoInput.css';

import cn from 'classnames';

const TodoInput = () => {

  // todo-input 박스를 렌더링 할지 여부
  const [open, setOpen] = useState(false);

  // todo-input 박스를 열고 닫는 클릭이벤트 핸들러
  const inputToggle = () => setOpen(!open);

  return (
    <>
        { open &&
        <div className="todo-input">
            <form className="insert-form">
                <input 
                    type="text"
                    placeholder="할 일을 입력 후, 엔터를 누르세요!"
                    autoFocus
                />            
            </form>
        </div>
        }
        <button className={cn('begin-btn',{open})} onClick={inputToggle}>
            <MdAdd />
        </button>
    </>
  );
};

export default TodoInput;