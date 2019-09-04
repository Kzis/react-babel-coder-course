import React, { Component } from 'react'
import Tab from './Tab.js'
import Tabs from './Tabs.js'
import TabList from './TabList.js'
import TabPanel from './TabPanel.js'


export default class App extends Component {
  render() {
    return (
      <div className='container mt-2'>
        <Tabs selectedIndex={0}>
          <TabList>
            <Tab tabIndex={0}>Tab#1</Tab>
            <Tab tabIndex={1}>Tab#2</Tab>
            <Tab tabIndex={2}>Tab#3</Tab>
          </TabList>
          <TabPanel tabIndex={0}>TabPanel#1</TabPanel>
          <TabPanel tabIndex={1}>TabPanel#2</TabPanel>
          <TabPanel tabIndex={2}>TabPanel#3</TabPanel>
        </Tabs>
      </div>
    )
  }
}