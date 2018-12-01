import React, { Component } from 'react'

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
                <h1>{this.props.author}님의 호불호를 알아보아요!</h1>
                <hr />
                <form onSubmit={() => this.props.handleUserName(this.state.name)}>
                    <div className="form-group">
                        <label for="username">당신의 이름을 입력해주세요.</label>
                        <input id="username" className="form-control" type="text" required
                            value={this.state.name}
                            onChange={(evt) => this.setState({name: evt.target.value})} />
                    </div>
                    <input className="btn btn-primary" type="submit" value="시작하기!" />
                </form>
            </div>
        );
    }
}

export default InputName;
