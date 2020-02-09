import React from 'react';

function TodoItem(props) {
  return (
    <div className="todo-item">
      <span class="todo-item-checkbox"><input type="checkbox" checked={props.complete}/></span>
      <span className="todo-item-name" data-complete={props.complete}>{props.name}</span>
    </div>
  )
}

export default TodoItem;