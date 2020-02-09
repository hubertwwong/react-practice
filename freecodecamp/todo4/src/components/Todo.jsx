import React from 'react';

import todoData from '../data/todoData';
import TodoItem from './TodoItem';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    }
  }

  handleClick = (id) => {
    let todos = this.state.todos.slice();

    todos.map(t => {
      if (parseInt(id) === parseInt(t.id)) {
        t.checked = !t.checked;
      }
      return t;
    });

    this.setState({
      todos: todos
    });
  }

  renderTodoItems() {
    return todoData.map(td => 
      <TodoItem 
        key={td.id} 
        id={td.id} 
        note={td.note} 
        checked={td.checked} 
        handleClick={this.handleClick}/>);
  }

  render() {
    return (
      <div>
        {this.renderTodoItems()}
      </div>
    );
  }
}

export default Todo;