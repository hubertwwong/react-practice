import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "00:00:00"
    }
  }

  time = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yy = today.getFullYear();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    this.setState({
      time: `${mm}/${dd}/${yy} ${h}:${m}:${s}`
    })
  }

  componentDidMount() {
    // set interval here.
    setInterval(this.time, 1000)
  }

  render() {
    return (
      <div className="clock">
        {this.state.time}
      </div>
    )
  }
}

export default Clock;