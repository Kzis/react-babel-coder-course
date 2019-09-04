import React from 'react';
import classNames from 'classnames';

const tabLinkClasses = (index, activeTabs) => {
    return classNames("nav-link", { active: index === activeTabs })
}

const TabsComponent = ({ tabs, activeTabs, onTabChange }) => (
    <div>
        <ul className="nav nav-tabs">
            {
                tabs.map(
                    ({ title }, index) => <li key={index} className="nav-item">
                        <a
                            className={tabLinkClasses(index, activeTabs)}
                            onClick={() => onTabChange(index)}
                        >{title}</a>
                    </li>
                )
            }
        </ul>

        <div className="tab-content">
            <div className="tab-pane active">
                {tabs[activeTabs].content}
            </div>
        </div>
    </div>
)

TabsComponent.defaultProps = {
    activeTab: 0
}

export default TabsComponent