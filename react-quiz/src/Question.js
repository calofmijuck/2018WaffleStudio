import React, { Component } from 'react'
import './HobulhoApp.css';

class Question extends Component {
    answer(what) {
        this.props.handleAnswer({
            subject: this.props.subject,
            choice: what
        });
    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col">
                        {this.props.author}
                    </div>
                    <div className="col-right">
                    {this.props.qindex+1} / {this.props.qcount}
                    </div>
                </div><br/>
                <h1>{this.props.subject}?</h1><br/>
                <input className="ybtn"
                    type="button"
                    value="호"
                    onClick={this.answer.bind(this,"like")}
                /><br/>
                <input className="nbtn"
                    type="button"
                    value="불호"
                    onClick={this.answer.bind(this,"dislike")}
                />
            </div>
        );
    }
}

export default Question;
