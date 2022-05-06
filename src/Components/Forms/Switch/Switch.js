import React from 'react';

function Switch({id, label, classes = '', isChecked, handler}) {
    return (
        <div className='field'>
            <input
                id={id}
                type='checkbox'
                name={id}
                className={`switch is-thin ${classes}`}
                onChange={handler}
                checked={isChecked}
            />
            <label for={id}>{label}</label>
        </div>
    );
}

export default Switch;
