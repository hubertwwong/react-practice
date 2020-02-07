import React from 'react';

import TodoItem from './TodoItem';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNote: "",
      notes: []
    };

    // bind functions so this works.
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.createNote = this.createNote.bind(this);
  }

  // Creates a new notes.
  // 1. Append the note to the notes state.
  // 2. Clear the text field.
  createNote() {
    console.log("Enter pressed");
    // Making copies. You should not modifiy state directly.
    let currentNote = this.state.currentNote; // I'm pretty sure you don't need to do this. Strings are immutable.
    let notes = [...this.state.notes];  // Using ES6 copy mechanism instead of slice.
    notes.push(currentNote);
    currentNote = "";
    console.log("> before");
    console.log(notes);
    console.log(currentNote);

    // Pretty sure you can put in both values at once.
    this.setState({
      currentNote: currentNote,
      notes: notes
    }, ()=> {
      // this.setState is async.
      // You need a callback to see the results.
      console.log("> after");
      console.log(this.state.currentNote);
      console.log(this.state.notes);
    });
  }


  deleteNote(id) {
    console.log(`Deleting ${id}`);
    // Filter returns a new array so you are not mutating state.
    let notes = this.state.notes.filter((item, i) => {
      return id !== i
    });
    this.setState({
      notes: notes
    });
  }

  handleChange(event) {
    this.setState({currentNote: event.target.value});
  }

  handleKeyDown(e) {
    // Call the function on "enter" keyCode
    if (e.keyCode === 13) {
      this.createNote();
    }
  }

  render() {
    return (
      <div>
        <div>
          <div>
            Please type your note below and press enter.
          </div>
          <input 
            type="text"
            value={this.state.currentNote}
            onChange={this.handleChange} 
            onKeyDown={this.handleKeyDown} />
        </div>
        <ul>
          {this.state.notes.map((note, id) => <TodoItem id={id} key={id} note={note} deleteNote={() => this.deleteNote(id)}/>)}
        </ul>
      </div>
    );
  }
}

export default Todo;