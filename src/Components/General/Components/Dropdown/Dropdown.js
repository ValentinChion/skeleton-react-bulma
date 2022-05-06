import React, {useState} from 'react';

import './Dropdown.scss';

function Dropdown({name, id, children, selectedName, isDisabled, additionalClasses}) {
    const [isActive, setIsActive] = useState();

    const handleDropdownActive = () => {
        if (!isDisabled) {
            setIsActive(!isActive);
        }
    };

    return (
        <div className={`dropdown ${isActive ? 'is-active' : ''} ${additionalClasses}`}>
            <div className='dropdown-trigger' onClick={handleDropdownActive}>
                <button className='button' aria-haspopup='true' aria-controls='dropdown-menu' disabled={isDisabled}>
                    <span>{selectedName || name}</span>
                    <span className='icon is-small'>
                        <i className='fas fa-angle-down' aria-hidden='true' />
                    </span>
                </button>
            </div>
            <div className='dropdown-menu' id={id} role='menu'>
                <div className='dropdown-content'>
                    {children &&
                        children.length &&
                        children.map((child) => React.cloneElement(child, {handleDropdownActive}))}
                </div>
            </div>
        </div>
    );
}

function DropdownItem({children, callback, callbackData, handleDropdownActive, value}) {
    const handleDropdownItemClick = () => {
        callback(value);
        handleDropdownActive();
    };

    return (
        <div className='dropdown-item' onClick={handleDropdownItemClick}>
            {children}
        </div>
    );
}

export {Dropdown, DropdownItem};
