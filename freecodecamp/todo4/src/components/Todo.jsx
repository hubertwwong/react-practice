import React from 'react';

import todoData from '../data/todoData';
import TodoItem from './TodoItem';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
      test: "testingIfThisGetsBlownoutOnSetState"
    }
  }

  handleClick = (id) => {
    this.setState(prevState => {
      const todos = prevState.todos.map(t => {
        if (parseInt(t.id) === parseInt(id)) {
          t.checked = !t.checked;
        }
        return t;
      });
      
      // Have to return it.
      return {
        todos
      }
    });
  }

  renderTodoItems() {
    return todoData.map(td => 
      <TodoItem 
        key={td.id}
        item={td}
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