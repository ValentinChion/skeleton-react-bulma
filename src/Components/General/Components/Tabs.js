import React, {useState} from 'react';

import {Link} from 'react-router-dom';

function Tabs({
    children,
    isToggle = false,
    isToggleRounded = false,
    isCentered = true,
    isBoxed = false,
    additionalClasses = '',
}) {
    let classes = 'tabs';

    if (isToggle) {
        classes += ' is-toggle';
        if (isToggleRounded) {
            classes += ' is-toggle-rounded';
        }
    }

    if (isCentered) {
        classes += ' is-centered';
    }

    if (isBoxed) {
        classes += ' is-boxed';
    }

    classes += ' ';
    classes += additionalClasses;

    return (
        <div className={classes}>
            <ul>{children}</ul>
        </div>
    );
}

function Tab({children, icon, iconSize = 'is-small', iconOnly = false, name, activeTab, handleClick, link}) {
    const handleTabClick = () => {
        handleClick(name);
    };

    if (link) {
        return (
            <li className={activeTab === name ? 'is-active' : ''} onClick={handleTabClick}>
                <Link to={link}>
                    {icon && (
                        <span className={`icon ${iconSize}`}>
                            <i className={icon} />
                        </span>
                    )}
                    {!iconOnly && <span>{children}</span>}
                </Link>
            </li>
        );
    }

    return (
        <li className={activeTab === name ? 'is-active' : ''} onClick={handleTabClick}>
            <a>
                {icon && (
                    <span className={`icon ${iconSize}`}>
                        <i className={icon} />
                    </span>
                )}
                {!iconOnly && <span>{children}</span>}
            </a>
        </li>
    );
}

function LinkTabs({size = 'medium', horizontal = 'left', tabs = [], paths = [], icons}) {
    const [activeTab, setActiveTab] = useState(new Array(tabs.length).fill(false));

    const handleClick = (tabClicked) => () => {
        const newActiveTab = new Array(tabs.length).fill(false);
        newActiveTab[tabClicked] = true;
        setActiveTab(newActiveTab);
    };

    return (
        <div className={`tabs is-${size} is-${horizontal}`}>
            <ul>
                {tabs.map((tab, i) => (
                    <li key={i} className={activeTab[i] ? 'is-active' : ''} onClick={handleClick(i)}>
                        <Link to={paths.length ? paths[i] : ''}>{tab}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export {Tabs, Tab, LinkTabs};
