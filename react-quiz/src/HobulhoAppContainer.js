import React, { Component } from 'react';
import HobulhoApp from './HobulhoApp'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "Jeongmin Lee",
            questions: [
                {
                    subject: "메밀소바",
                    choice: "dislike"
                },
                {
                    subject: "데자와",
                    choice: "like"
                },
                {
                    subject: "녹차 아이스크림",
                    choice: "like"
                },
                {
                    subject: "회",
                    choice: "dislike"
                },
                {
                    subject: "콩국수",
                    choice: "dislike"
                },
                {
                    subject: "돼지 간",
                    choice: "like"
                }
            ]
        };
    }

    render() {
        return (
            <div className="container">
            <HobulhoApp {...this.state} />
            </div>
        );
    }
}

export default App;
