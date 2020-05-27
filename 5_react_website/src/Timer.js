// Important!! Refer: https://reactjs.org/docs/react-component.html#setstate
import React from 'react';

class Timer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            time: 0 // seconds
        };
    }

    tick = () => {
        this.interval = setInterval(() => {
            // The output of the updater is shallowly merged with state.
            // If the next state depends on the current state, we recommend using the updater function form, instead:
                // this.setState((state) => {
                //   return {quantity: state.quantity + 1};
                // });
            // You may optionally pass an object as the first argument to setState() instead of a function:
            this.setState({time: this.state.time + 1});
        }, 1000);
    }

    componentDidMount() {
        this.tick();
        console.log("Mounted");
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div style={{ margin: '2rem' }}>
                <h4>Timer</h4>
                <span>{this.state.time} seconds</span>
            </div>
        );
    }
}

export default Timer;
/*
// From the official React website:
import React from 'react';
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        // The output of the updater is shallowly merged with state.
        // If the next state depends on the current state, we recommend using the updater function form, instead:
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
        console.log('mounted');
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        console.log('un-mounted');
    }

    render() {
        return (
            <div>
                Seconds: {this.state.seconds}
            </div>
        );
    }
}

export default Timer;
*/