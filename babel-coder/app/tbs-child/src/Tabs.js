import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Tabs extends Component {

    static childContextTypes = {
        selectedIndex: PropTypes.number.isRequired
    }

    getChildContext = () => {
        return {
            selectedIndex: this.props.selectedIndex
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}