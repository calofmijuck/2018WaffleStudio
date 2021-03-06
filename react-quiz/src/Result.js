import React, { Component } from 'react'
import Answer from './Answer'

class Result extends Component {
    render() {
        let correct = this.props.authorAnswer.reduce(
            (a, x, i) => {
                return x.choice === this.props.userAnswer[i].choice ? a + 1 : a;
            },
            0
        );
        let qcount = this.props.authorAnswer.length;
        let score = Math.round(100 * correct / qcount);
        let msg;

        if(score === 100) {
            msg = <b>와!! 저랑 완벽하게 일치하시는군요! 저랑 맛있는거 먹으러 가요!! 스크린샷과 함께 연락주세요!!</b>;
        }
        return (
            <div>
                <h1>{this.props.author}님과의 호불호 일치도입니다!</h1>
                <div className="text-center">
                    <span className="display-1">{score}</span>점<br />
                    <span className="display-6">총 {qcount}개 중 {correct}개 일치</span>
                </div>
                { msg }
                <hr />
                {/* <h3>
                {this.props.author}:&nbsp;
                {this.props.authorAnswer.map(
                    (x, i) => <Answer key={i} {...x} />
                )}
                </h3> <hr />*/}
                <h3>
                {this.props.user} 님의 호불호:&nbsp;
                {this.props.userAnswer.map(
                    (x, i) => <Answer key={i} {...x} />
                )}
                </h3>

                <div>
                    <input className="stbtn"
                        type="button"
                        value="다시하기!"
                        onClick={this.props.reset}
                    />
                </div>
            </div>
        );
    }
}

export default Result;
