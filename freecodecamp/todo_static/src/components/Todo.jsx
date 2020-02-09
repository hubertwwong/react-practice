import React from 'react';

import TodoItem from './TodoItem';

function Todo() {
  return (
    <div className="todo">
      <TodoItem name="item 1"/>
      <TodoItem name="item 2"/>
      <TodoItem name="item 3"/>
    </div>
  )
}

export default Todo;