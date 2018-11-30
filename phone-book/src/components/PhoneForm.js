import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // This is called "Computed Propery Names"
        });
    }

    handleSubmit = (e) => {
        // Prevent Reloading
        e.preventDefault();
        // pass state values to parent by onCreate
        this.props.onCreate(this.state);
        // clear states
        this.setState({
            name: '',
            phone: ''
        });
    }

    render() {
        const nameStyle = {
            height: '30px',
            width: '300px'
        }

        const phoneStyle = {
            height: '75px',
            width: '500px',
        };

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    style={nameStyle}
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                /><br/>
                <input
                    style={phoneStyle}
                    placeholder="Phone Number"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                /><br/>
                <button type="submit">Submit</button>
                <div>{this.state.name} {this.state.phone}</div>
            </form>
        );
    }
}

export default PhoneForm;
