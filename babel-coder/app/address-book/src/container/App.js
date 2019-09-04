import React, { Component } from 'react';
import Form from '../components/Form.js';
import Contracts from '../components/Contracts.js';

class App extends Component {

  state = {
    contacts: [
      { name: "Somchai", address: "123" }
    ],
  }

  createContract = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact]
    })
  }

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.createContract} />
        <hr />
        {/* <Contracts contacts={this.state.contacts} /> */}
        <Contracts {...this.state} />
      </div>
    );
  }
}

export default App;
