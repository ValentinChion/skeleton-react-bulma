import React, {useState} from 'react';

import './SwitchValues.scss';

function SwitchValues({id, callback, callbackData, left, leftPos = 15, rightPos = leftPos * 2, right}) {
    const [isChecked, setIsChecked] = useState();

    const handleSwitch = () => {
        setIsChecked(!isChecked);
        callback(isChecked, callbackData);
    };

    return (
        <div className='switch-value'>
            <input className='switch-with-values' onChange={handleSwitch} checked={isChecked} type='checkbox' id={id} />
            <label htmlFor={id}>
                <div className='toggle has-background-primary' />
                <div
                    className='names'
                    style={{
                        marginLeft: leftPos + '%',
                    }}>
                    <p className='left'>{left}</p>
                    <p
                        className='right'
                        style={{
                            marginLeft: rightPos + '%',
                        }}>
                        {right}
                    </p>
                </div>
            </label>
        </div>
    );
}

export default SwitchValues;
