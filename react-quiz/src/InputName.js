import React, { Component } from 'react'
import './HobulhoApp.css';

class InputName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    render() {
        return (
            <div>
                <h1>{this.props.author}님의 호불호와 비교해 보세요!</h1>
                <p>질문들에 대해 여러분의 취향대로 답해주시면 됩니다!</p>
                <hr />
                <form onSubmit={() => this.props.handleUserName(this.state.name)}>
                    <div className="form-group">
                        <label htmlFor="username">당신의 이름을 입력해주세요.</label>
                        <br/>
                        <input id="username"
                        placeholder="이름"
                        className="form-control" type="text" required
                            value={this.state.name}
                            onChange={(evt) => this.setState({name: evt.target.value})} />
                    </div>
                    <br/>
                    <input className="stbtn" type="submit" value="시작하기!" />
                </form>
            </div>
        );
    }
}

export default InputName;
