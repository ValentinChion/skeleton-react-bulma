import React, {useState, useEffect} from 'react';

function CheckBox({
    type = 'checkbox',
    id,
    radioGroup,
    index,
    label,
    value,
    currentSelected,
    baseCheck,
    isDisabled = false,
    isCursorNotAllowed = false,
    containerClasses,
    labelClasses,
    callback,
    hasHandlerClosure = true,
}) {
    const [isChecked, setIsChecked] = useState(baseCheck || false);

    useEffect(() => {
        setIsChecked(baseCheck);
    }, [baseCheck]);

    useEffect(() => {
        if (currentSelected && +currentSelected === value) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }, [currentSelected]);

    const makeClosure = () => {
        if (hasHandlerClosure) {
            if (id) {
                return callback(id);
            } else {
                return callback;
            }
        }
        return callback;
    };

    const closure = makeClosure();

    const handleCb = (e) => {
        setIsChecked(e.target.checked);
        closure(e);
    };

    return (
        <div className={`pretty ${containerClasses} ${isCursorNotAllowed ? 'is-cursor-not-allowed' : ''}`}>
            {type === 'checkbox' && (
                <input
                    type={type}
                    id={id}
                    name={id}
                    value={value}
                    checked={isChecked}
                    disabled={isDisabled}
                    onChange={handleCb}
                />
            )}
            {type === 'radio' && (
                <input
                    type={type}
                    id={id}
                    name={radioGroup}
                    value={value}
                    checked={isChecked}
                    disabled={isDisabled}
                    onChange={handleCb}
                />
            )}

            <div className={`state ${labelClasses}`}>
                <label className={`${isCursorNotAllowed ? 'is-cursor-not-allowed' : ''}`} htmlFor={id}>
                    {label}
                </label>
            </div>
        </div>
    );
}

export default CheckBox;
