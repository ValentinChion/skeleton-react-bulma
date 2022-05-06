import React from 'react';

function NumberInput({name, value, placeholder, help, isDisabled = false, additionalClasses, callback, callbackData}) {
    const handleChange = (e) => {
        if (e.target.validity.valid) {
            callback(e.target.value, callbackData);
        }
    };

    const handleBlur = (e) => {
        if (e.target.value === '') {
            callback(0, callbackData);
        }
    };

    return (
        <>
            <div className='field'>
                <label className='label'>{name}</label>
                <div className='control'>
                    <input
                        className={`input ${additionalClasses}`}
                        type='text'
                        pattern='[0-9]*'
                        value={value === undefined ? '' : value}
                        placeholder={placeholder}
                        disabled={isDisabled}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {help && <p className={`help ${additionalClasses}`}>{help}</p>}
                </div>
            </div>
        </>
    );
}

function PriceInput({value, isDisabled = false, callback, callbackData, placeholder, name}) {
    const handleChange = (e) => {
        if (e.target.validity.valid) {
            callback(e.target.value, callbackData);
        }
    };

    const handleBlur = (e) => {
        if (e.target.value === '') {
            callback(0, callbackData);
        }
    };

    return (
        <>
            <div className='field'>
                <label className='label'>{name}</label>
                <div className='control has-icons-left'>
                    <input
                        className='input'
                        type='text'
                        pattern='[0-9]*'
                        value={value === undefined ? '' : value}
                        placeholder={placeholder}
                        disabled={isDisabled}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span className='icon is-left'>
                        <i className='fas fa-euro-sign'></i>
                    </span>
                </div>
            </div>
        </>
    );
}

export {NumberInput, PriceInput};
