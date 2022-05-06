import React from 'react';

import './IconButton.scss';

function IconButton({handleClick, additionalStyles = '', children, additionalText}) {
    return (
        <span onClick={handleClick} className='container-is-icon is-clickable'>
            <div className={`button is-button-icon mr-2 mb-2 ${additionalStyles}`}>
                <span className='icon'>{children}</span>
            </div>
            {additionalText}
        </span>
    );
}

export default IconButton;
