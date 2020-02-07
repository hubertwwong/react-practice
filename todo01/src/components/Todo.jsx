import React from 'react';

import TodoItem from './TodoItem';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNote: "",
      notes: []
    };
  }

  createNote = () => {
    console.log("create note");
    let currentNote = this.state.currentNote;
    let notes = [...this.state.notes];
    notes.push(currentNote);
    currentNote = "";

    this.setState({
      currentNote,
      notes
    })
  };

  deleteNote = (id) => {
    console.log("delete note");
    let notes = this.state.notes.filter((item, i) => id !== i);
    this.setState({
      notes
    });
  }

  handleChange = (e) => {
    this.setState({
      currentNote: e.target.value
    });
  }

  handleKeyDown = (e) => {
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
          {
            this.state.notes.map((note, id) => {
              return <TodoItem
                id={id}
                note={note}
                deleteNote={() => this.deleteNote(id)} />
            })
          }
        </ul>
      </div>
    );
  }
};

export default Todo;