import React, { Component } from 'react'

const ANSWER_CLASS = {
    'like': 'like',
    'dislike': 'dislike'
}

class Answer extends Component {
    render() {
        return (
            <div className="ans">
                <span className={ANSWER_CLASS[this.props.choice]}>
                {this.props.subject}
                </span>
            </div>
        );
    }
}

export default Answer;
