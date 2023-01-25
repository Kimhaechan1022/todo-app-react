import React from 'react';
import './css/TodoHeader.css';

const TodoHeader = ({todoList}) => {

  const undoList = todoList.filter(todo => !todo.done);

  return (
    <header>
        <h1>2023년 1월 15일</h1>
        <h2 className='day'>수요일</h2>
        <div className='tasks-left'>할 일 {undoList.length}개 남음</div>
    </header>
  )
}

export default TodoHeader