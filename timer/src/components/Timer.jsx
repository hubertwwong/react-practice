import React from 'react';

// Moved the initial state here so I can reuse it.
const initState = {
    timeDisp: "00:00:00",
    timeRaw: 0,
    intervalFn: null,
}

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = initState;
    }
    
    // pads an int and returns a string
    // used to keep the timer to 2 digits min.
    pad = (n) => {
        let prefix = "";
        if (n < 10) {
            prefix = "0";
        }
        return prefix + n;
    }

    // Updates every second.
    updateTime = () => {
        let timeRaw = this.state.timeRaw;
        
        // update the timer
        timeRaw += 1;

        // update the display time
        let h = Math.floor(timeRaw / 3600);
        h = this.pad(h);
        let m = Math.floor(timeRaw / 60);
        m = this.pad(m);
        let s = ("" + (timeRaw % 60));
        s = this.pad(s);
        let timeDisp = `${h}:${m}:${s}`;
        
        // update state.
        this.setState({
            timeDisp: timeDisp,
            timeRaw: timeRaw
        });
    }

    handleStartStop = (e) => {
        let intervalFn = this.state.intervalFn;
        
        // Uses the JS setInterval function that calls updateTime every second.
        if (intervalFn === null) {
            // Start time. Interval updates every second
            intervalFn = setInterval(this.updateTime, 1000);
        } else {
            // Stop time
            clearInterval(intervalFn);
            intervalFn = null;
        }

        // update the state.
        // intervalFn contains a reference from setInterval so you can clear it.
        // if you don't have this reference, you can't clear the interva.
        this.setState({
            intervalFn: intervalFn
        })
    }

    handleReset = (e) => {
        let intervalFn = this.state.intervalFn;
        clearInterval(intervalFn);
        this.setState(initState);
    }

    render() {
        return (
            <div className="Timer">
                <div className="Time">
                    {this.state.timeDisp}
                </div>
                <div>
                    <button onClick={this.handleStartStop}>start/stop</button>
                    <button onClick={this.handleReset}>restart</button>
                </div>
            </div>
        )
    }
}

export default Timer;