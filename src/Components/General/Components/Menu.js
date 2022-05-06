import React, {useState, useEffect} from 'react';

function Menu({children, callback, id, forceActiveId, additionalClasses}) {
    const [activeId, setActiveId] = useState();

    useEffect(() => {
        if (forceActiveId) {
            setActiveId(forceActiveId);
        }
    }, [forceActiveId]);

    const handleClick = (e) => {
        if (callback) {
            callback(e);
        }

        setActiveId(e.target.id);
    };

    return (
        <div className={`menu ${additionalClasses}`}>
            {children.map((child) => React.cloneElement(child, {activeId, handleClick, id}))}
        </div>
    );
}

function MenuLabel({children}) {
    return <p className='menu-label'>{children}</p>;
}

function MenuItem({callback, id, activeId, children, linkName, handleClick, overrideClick}) {
    const [isActive, setIsActive] = useState();

    useEffect(() => {
        if (activeId === id) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [activeId]);

    return (
        <li>
            <a id={id} onClick={overrideClick || handleClick} className={isActive ? 'is-active' : ''}>
                {linkName}
            </a>
            {children}
        </li>
    );
}

function MenuList({items, id, activeId, handleClick}) {
    return (
        <ul className={'menu-list'}>
            {items.map((item, i) => (
                <MenuItem
                    key={`${id}-${item.id}`}
                    id={`${id}-${item.id}`}
                    activeId={activeId}
                    handleClick={handleClick}
                    linkName={item.name}>
                    {item.sublist}
                </MenuItem>
            ))}
        </ul>
    );
}

export {Menu, MenuLabel, MenuList, MenuItem};
