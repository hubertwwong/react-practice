import React from 'react';

// class TodoItem extends React.Component {
//   render() {
//     return (
//       <li key={this.props.id}>
//         {this.props.note}
//       </li>
//     );
//   }
// }

// ES6 functional component.
// Using destructing to get props.
const TodoItem = ({id, note, deleteNote}) => (
  <li key={id}>
    {note}
    <button onClick={deleteNote}>x</button>
  </li>
);

export default TodoItem;

/*

https://programmingwithmosh.com/react/react-functional-components/
About functional components.
You can also check the official react docs too.

I left both version to so you can see the diff.

Still need the react import even if you are using functional components.
*/