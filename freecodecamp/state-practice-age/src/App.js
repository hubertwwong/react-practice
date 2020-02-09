import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 42,
      name: 'bob'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    );
  }
}

export default App;