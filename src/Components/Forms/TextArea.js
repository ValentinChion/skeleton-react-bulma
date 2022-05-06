import React from 'react';

function TextArea({
    placeholder,
    rows,
    value,
    name,
    handler,
    blur,
    keyDownHandler,
    additionalClasses = '',
    labelClasses = '',
    help,
    helpClasses = '',
}) {
    return (
        <div className='field'>
            <label className={`label ${labelClasses}`}>{name}</label>
            <div className='control'>
                <textarea
                    className={`textarea ${additionalClasses}`}
                    placeholder={placeholder}
                    rows={rows}
                    onChange={handler}
                    onKeyDown={keyDownHandler}
                    onBlur={blur}
                    value={value || ''}></textarea>
            </div>
            {help && <p className={`help ${helpClasses}`}>{help}</p>}
        </div>
    );
}

export default TextArea;
