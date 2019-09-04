import React, { Component } from 'react'

export default class TabsList extends Component {

    render() {
        return (
            <ul className="nav nav-tabs">
                {this.props.children}
            </ul>
        )
    }
}