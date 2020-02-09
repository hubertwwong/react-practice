import React from 'react';

import todoItemsData from '../data/todoItem';
import TodoItem from './TodoItem';

function Todo() {
  const renderTodoItemList = todoItemsData.map(
      i => <TodoItem key={i.id} name={i.name} complete={i.complete}/>
    );

  return (
    <div className="todo">
      {renderTodoItemList}
    </div>
  )
}

export default Todo;