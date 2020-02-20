import React from 'react';

function TodoItem(props) {
  return (
    <div className="todo-items-row">
      <input 
        type="checkbox"
        name="complete"
        checked={props.data.complete}
        onChange={() => {props.handleClick(props.data.id)}} />
      <span className={props.data.complete ? "note-complete" :"note-not-complete"}>{props.data.note}</span>
    </div>
  )
}

export default TodoItem;