import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }

    // not in edit mode and if info values are the same, do not re-render
    shouldComponentUpdate(nextProps, nextState) {
        if (!this.state.editing && !nextState.editing && nextProps.info === this.props.info) {
            return false;
        }
        return true; // else re-render
    }

    state = {
        // When edit button is clicked, editing value is set to true
        // when this value is true, this will be shown in <input> form
        editing: false,
        // the value of <input> will vary. Set placeholders
        name: '',
        phone: '',
    }


    handleRemove = () => {
        // When delete button clicked - call onRemove with id
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    // Toggle Edit
    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }

    // Called when input has onChange event
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // What to do when value of editing is changed
        // When edit is triggered, the original value is shown in <input>
        // When applying the modifications, the values will be passed to parent

        const { info, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing) {
            this.setState({
                name: info.name,
                phone: info.phone
            });
        }

        if(prevState.editing && !this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { editing } = this.state;

        if(editing) {
            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="Name"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placehlder="Phone Number"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>Apply</button>
                    <button onClick={this.handleRemove}>Delete</button>
                </div>
            );
        }

        const {
            name, phone
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>Edit</button>
                <button onClick={this.handleRemove}>Delete</button>
            </div>
        );
    }
}

export default PhoneInfo;
