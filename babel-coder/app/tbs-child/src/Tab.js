import React, { Component } from 'react'
import classNames from 'classnames'

export default class Tab extends Component {

    linkClasses = () => {
        return classNames("nav-link", { active: this.props.tabIndex === this.context.selectedIndex })
    }

    render() {
        return (
            <li className="nav-item">
                <a href="#" className="nav-link">{this.props.children}</a>
            </li>
        )
    }
}