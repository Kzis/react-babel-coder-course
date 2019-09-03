import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  state = {
    notes: [
      "Note#1",
      "Note#2",
      "Note#3"
    ],
    value: ""
  }

  componentsDidMount() {
    this.noteInput.focus()
  }

  addNote = (e) => {
    if (e.keyCode === 13) {
      this.setState(
        {
          notes: [...this.state.notes, e.target.value],
          value: ""
        }
      )

    }
  }

  changeValue = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.notes.map(
              (note, index) => <li key={index}>{note}</li>
            )
          }
        </ul>
        <input type="text"
          value={this.state.value}
          onChange={this.changeValue}
          onKeyUp={this.addNote}
          ref={input => this.noteInput = input} />
      </div>
    );
  }
}

export default App;
