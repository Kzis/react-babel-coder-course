import React, { Component, PropTypes } from 'react'

export default class TabsPanel extends Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}