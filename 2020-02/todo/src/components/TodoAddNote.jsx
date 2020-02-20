import React from 'react';

function TodoAddNote(props) {
  return (
    <form className="todo-add-note" onSubmit={props.handleSubmit}>
      <input 
        type="text" 
        name="todoAddItem" 
        value={props.todoAddItem} 
        placeholder="Add a new note" 
        onChange={props.handleChange} />
      <button className="todo-add-note-button">Add</button>
    </form>
  )
}

export default TodoAddNote;