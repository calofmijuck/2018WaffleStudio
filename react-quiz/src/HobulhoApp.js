import React, { Component } from 'react';
import './HobulhoApp.css';
import InputName from './InputName';
import Question from './Question';
import Result from './Result';

const makeInitialState = () => {
    return {
        qindex: 0,
        user: '',
        userAnswer: []
    };
};

class HobulhoApp extends Component {

    constructor(props) {
        super(props);
        this.state = makeInitialState();
    }

    reset() {
        this.setState(makeInitialState());
    }

    handleUserName(name) {
        this.setState({
            user: name
        });
    }

    handleAnswer(ans) {
        this.setState({
            qindex: this.state.qindex + 1,
            userAnswer: this.state.userAnswer.concat(ans)
        });
    }

    render() {
        let qcount = this.props.questions.length;
        return (
            <div className="app-container">
            {!this.state.user ?
                <InputName
                author={this.props.author}
                handleUserName={this.handleUserName.bind(this)} /> :
                (
                    this.state.qindex < qcount ?
                    <Question {...this.props.questions[this.state.qindex]}
                        author={this.props.author}
                        qindex={this.state.qindex}
                        qcount={qcount}
                        handleAnswer={this.handleAnswer.bind(this)}
                    /> :
                    <Result
                        author={this.props.author}
                        authorAnswer={this.props.questions}
                        user={this.state.user}
                        userAnswer={this.state.userAnswer}
                        reset={this.reset.bind(this)}
                    />
                )
            }
            </div>
        );
    }
}

export default HobulhoApp;
