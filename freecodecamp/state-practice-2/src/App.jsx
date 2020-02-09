import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    }
  }
  
  renderIsLoggedIn() {
    if (this.state.isLoggedIn) {
      return "in";
    } else {
      return "out";
    }
  }

  render() {
    return (
      <div>
        <h1> You are currently logged {this.renderIsLoggedIn()}</h1>
      </div>
    )
  }
}

export default App;