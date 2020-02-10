import React from 'react';

class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: []
    }
  }

  componentDidMount() {
    fetch('https://www.swapi.co/api/people/1')
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      this.setState(prevState => {
        return ({
          isLoading: false,
          data: JSON.stringify(data)
        });
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? "Loading..." :this.state.data}
      </div>
    )
  }
}

export default StarWars;