import React from 'react';

function TodoItem(props) {
  return (
    <div>
      <input type="checkbox" checked={props.checked} onChange={() => {props.handleClick(props.id)}}/>
      <div>{props.note}</div>
    </div>
  );
}

export default TodoItem;