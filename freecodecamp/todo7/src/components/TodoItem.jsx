import React from 'react';

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input className="todo-item-checkbox" type="checkbox" checked={props.item.checked} onChange={() => {props.handleClick(props.item.id)}}/>
      <span className={props.item.checked ? "todo-item-note-checked": "tod-item-note"}>{props.item.note}</span>
    </div>
  )
}

export default TodoItem;