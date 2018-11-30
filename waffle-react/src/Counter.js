import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
    }

    increase = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    decrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        return (
            <div>
                <h3>Counter</h3>
                <div>Value : {this.state.number}</div>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        );
    }
}

export default Counter;
