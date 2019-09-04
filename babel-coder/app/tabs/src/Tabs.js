import React, { Component } from 'react';
import classNames from 'classnames';

class Tabs extends Component {
    static defaultProps = {
        activeTabs: 0
    }

    tabLinkClasses = (index) => {
        return index === this.props.activeTabs ? "nav-link active" : "nav-link"
    }

    //v2
    tabLinkClasses2 = (index) => {
        let classes = "nav-link"
        if (index === this.props.activeTabs) classes += " active"
        return classes
    }

    //v3
    tabLinkClasses3 = (index) => {
        return classNames("nav-link", { active: index === this.props.activeTabs })
    }

    render() {
        return (
            <ul className="nav nav-tabs">
                {
                    this.props.tabs.map(
                        (tab, index) => <li key={index} className="nav-item">
                            <a className={this.tabLinkClasses3(index)}>{tab.title}</a>
                        </li>
                    )
                }
            </ul>
        )
    }
}

export default Tabs;