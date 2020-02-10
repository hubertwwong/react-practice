import React from 'react';

import Login from './Login';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  handleClick = () => {
    this.setState(prevState => {
      return ({
        isLoggedIn: !prevState.isLoggedIn
      });
    });
  }

  render() {
    return (
      <div>
        <Login handleClick={this.handleClick} loggedIn={this.state.isLoggedIn}/>
      </div>
    )
  }
}

export default App;