import React, { Component } from 'react'

const ANSWER_CLASS = {
    'like': 'like',
    'dislike': 'dislike'
}

class Answer extends Component {
    render() {
        return (
            <span className={ANSWER_CLASS[this.props.choice]}>
            {this.props.subject}
            </span>
        );
    }
}

export default Answer;
