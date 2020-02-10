import React from 'react';

function TodoItem(props) {
  return (
    <div>
      <input type="checkbox" checked={props.item.checked} onChange={() => {props.handleClick(props.item.id)}}/>
      <div>{props.item.note}</div>
    </div>
  );
}

export default TodoItem;