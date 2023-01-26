import React from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import './css/TodoItem.css';
import cn from 'classnames';

const TodoItem = ({ todo, remove, updateTodoStatus }) => {

  const {id, title, done} = todo;  

  // 서버에 삭제요청 클릭 이벤트핸들러
  const deleteClickHandler = e => {
    remove(id);
  };

  const doneCheckHandler = e => {

    const modTodo = {
      ...todo,
      done:!done
    };

    updateTodoStatus(modTodo);
  };

  return (
    <li className="todo-item">
        <div className={cn('check-circle', {active: done})} 
        onClick={doneCheckHandler}>
            {done && <MdDone />}
        </div>
        <span className={cn('text', {finish: done})}>{title}</span>
        <div className="remove" onClick={deleteClickHandler}>
            <MdDelete />
        </div>
    </li>
  );
};

export default TodoItem;