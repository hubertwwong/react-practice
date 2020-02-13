import React from 'react';

class NameForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.onChange} />
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.onChange} />
        <div>{this.state.lastName} {this.state.lastName ? ',': ''} {this.state.firstName}</div>
      </div>
    )
  }
}

export default NameForm;