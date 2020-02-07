import React from 'react';

const TodoItem = ({id, note, deleteNote}) => (
  <li key={id}>
    {note}
    <button onClick={deleteNote}>x</button>
  </li>
);

export default TodoItem;