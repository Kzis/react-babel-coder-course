
import React, { Component } from 'react';

class Form extends Component {

    state = {
        name: '',
        address: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { name, address } = this.state
        this.props.onSubmit({
            name: name,
            address: address
        })

        this.clearForm()
    }

    clearForm = () => {
        this.setState({
            name: '',
            address: '',
        })
    }

    changeName = (e) => {
        this.setState({ name: e.target.value })
    }

    changeAddress = (e) => {
        this.setState({ address: e.target.value })
    }

    // v1
    // changeState = (state) => {
    //     return (e) => {
    //         this.setState({ [state]: e.target.value })
    //     }
    // }

    //reduce
    changeState = (state) => (e) => (
        this.setState({ [state]: e.target.value })
    )

    render() {
        const { name, address } = this.state

        return (

            <div>
                <h2>Address Form</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Name"
                            value={name}
                            // onChange={this.changeName}
                            onChange={this.changeState('name')}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Address"
                            value={address}
                            // onChange={this.changeAddress}
                            onChange={this.changeState('address')}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.handleSubmit}>Create</button>
                </form>
            </div >
        )
    }
}

export default Form