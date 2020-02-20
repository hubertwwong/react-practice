import React from 'react';

import TodoItem from './TodoItem';
import TodoAddNote from './TodoAddNote';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todoAddItem: "",
      notes: [
        // {
        //   id: 1,
        //   note: "first note",
        //   complete: false
        // },
        // {
        //   id: 2,
        //   note: "second note",
        //   complete: true
        // }
      ]
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? !target.checked : target.value;
    
    this.setState({
      [name]: value
    });
  }

  handleClick = (id) => {
    this.setState(prevState => {
      const notes = prevState.notes.map(n => {
        if (parseInt(n.id) === parseInt(id)) {
          n.complete = !n.complete;
        }
        console.log(n);
        return n;
      });

      return {
        notes
      }
    });
  }

  handleSubmit = (event) => {
    // Stop the on submit handler from firing.
    event.preventDefault();

    let notes = this.state.notes.slice();
    let newNote = this.state.todoAddItem; 

    notes.push({
      id: notes.length === 0 ? 1 : notes[notes.length-1].id + 1,
      note: newNote,
      complete: false
    });
    
    this.setState({
      todoAddItem: "",
      notes
    });
  }

  renderTodoItems = () => {
    if (this.state.notes.length > 0) {
      return this.state.notes.map(n => 
          <TodoItem 
            key={n.id} 
            data={n} 
            handleClick={this.handleClick} 
            />
        );
    } else {
      return (
        <div>
          No notes entered yet. Please add a note and press the add button or press the enter key.
        </div>
      );
    }
  }

  render() {
    return (
      <div className="todo">
        <TodoAddNote 
          todoAddItem={this.state.todoAddItem}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          />
        <div className="todo-items">
          {this.renderTodoItems()}
        </div>
      </div>
    )
  }
}

export default Todo;