import React from 'react';

import todoData from '../data/todoData';
import TodoItem from './TodoItem';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: todoData
    }
  }

  onClick = (id) => {
    this.setState(prevState => {
      const notes = prevState.notes.map(t => {
        if (parseInt(t.id) === parseInt(id)) {
          t.checked = !t.checked;
        }
        return t;
      });

      return {
        notes
      };
    });
  }

  renderTodoItems() {
    return todoData.map(
      item => <TodoItem 
                key={item.id} 
                item={item} 
                handleClick={this.onClick} 
                />
      );
  }

  render() {
    

    return (
      <div className="todo">
        {this.renderTodoItems()}
      </div>
    )
  }
}

export default Todo;