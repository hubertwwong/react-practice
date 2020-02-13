import React from 'react';

import '../styles/App.css';
import MemeGenerator from './MemeGenerator';

class App extends React.Component {
  render() {
    return (
      <div>
        <MemeGenerator />
      </div>
    )
  }
}

export default App;