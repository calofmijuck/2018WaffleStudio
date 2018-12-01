import React, { Component } from 'react';
import HobulhoApp from './HobulhoApp'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "이성찬",
            questions: [
                {
                    subject: "마카롱",
                    choice: "dislike"
                },
                {
                    subject: "돼지껍데기",
                    choice: "dislike"
                },
                {
                    subject: "메밀소바",
                    choice: "like"
                },
                {
                    subject: "곱창",
                    choice: "like"
                },
                {
                    subject: "데자와",
                    choice: "dislike"
                },
                {
                    subject: "민트 초코 아이스크림",
                    choice: "like"
                },
                {
                    subject: "회",
                    choice: "like"
                },
                {
                    subject: "오이",
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
