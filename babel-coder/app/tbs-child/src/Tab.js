import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames'

export default class Tab extends Component {

    static contextTypes = {
        selectedIndex: PropTypes.number.isRequired,
        onTabChange: PropTypes.func.isRequired
    }

    linkClasses = () => {
        return classNames("nav-link", { active: this.props.tabIndex === this.context.selectedIndex })
    }

    handleClick = () => {
        this.context.onTabChange(this.props.tabIndex)
    }

    render() {
        return (
            <li className="nav-item">
                <a href="#"
                    className={this.linkClasses()}
                    onClick={this.handleClick}
                >
                    {this.props.children}
                </a>
            </li>
        )
    }
}