import React, { Component } from 'react';
import MyName from './MyNameFunc'
import Counter from './Counter'
import './App.css'

class App extends Component {
    render() {
        return (
            <React.Fragment>
            <MyName />
            <Counter />
            </React.Fragment>
        );
    }
}

export default App;
