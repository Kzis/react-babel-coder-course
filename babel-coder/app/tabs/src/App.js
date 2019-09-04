import React, { Component } from 'react';
// import Tabs from './Tabs.js';
import Tabs from './Tabs2.js';

class App extends Component {

  tabs = [
    {
      title: "Tab#1",
      content: "Content#1"
    },
    {
      title: "Tab#2",
      content: "Content#2"
    },
    {
      title: "Tab#3",
      content: "Content#3"
    }
  ]

  state = {
    activeTabs: 0
  }

  setActiveTab = (index) => {
    this.setState({
      activeTabs: index
    })
  }

  render() {
    return (
      <div className="container mt-2">
        <Tabs tabs={this.tabs}
          activeTabs={this.state.activeTabs}
          onTabChange={this.setActiveTab}
        />
      </div>
    )
  }
}

export default App;
