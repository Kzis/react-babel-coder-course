import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class TabsPanel extends Component {

    static contextTypes = {
        selectedIndex: PropTypes.number.isRequired
    }

    render() {
        return (
            this.props.tabIndex === this.context.selectedIndex && (
                <div className="tabb-content">
                    <div className="tab-pane active">{this.props.children}</div>
                </div>
            )

        )
    }
}