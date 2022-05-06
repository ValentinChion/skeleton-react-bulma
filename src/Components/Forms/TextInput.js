import React, {useRef, useEffect} from 'react';

function TextInput({
    id,
    name,
    value,
    defaultValue,
    isReadOnly,
    help = '',
    helpClasses = '',
    placeholder = '',
    wrapperClasses = '',
    additionalClasses = '',
    labelClasses = '',
    icon = '',
    rightIcon,
    onRightIconClick,
    autocomplete = '',
    isDisabled = false,
    isRounded = false,
    smallIcon = true,
    type = 'text',
    handler,
    onKeyUp,
    blur,
    handlerClick,
    isHidden,
    propRef,
    // Combine with type = "number"
    min,
    step,
    max,
}) {
    let inputRef;
    if (!handler) {
        inputRef = useRef();

        useEffect(() => {
            inputRef.current.value = value;
        }, [value]);
    }
    return (
        <div onClick={handlerClick} className={`field ${isHidden ? 'is-hidden' : ''} ${wrapperClasses}`}>
            {name && <label className={`label ${labelClasses}`}>{name}</label>}
            <div className={`control ${icon && 'has-icons-left'} ${rightIcon && 'has-icons-right'}`}>
                <input
                    className={isRounded ? `input is-rounded ${additionalClasses}` : `input ${additionalClasses}`}
                    type={type}
                    id={id}
                    ref={inputRef || propRef}
                    autoComplete={autocomplete}
                    placeholder={placeholder}
                    onChange={handler}
                    onBlur={blur}
                    onKeyUp={onKeyUp}
                    disabled={isDisabled}
                    value={handler ? value || '' : undefined}
                    defaultValue={defaultValue}
                    min={min}
                    step={step}
                    max={max}
                    readOnly={isReadOnly}
                />
                {(type === 'password' || icon) && (
                    <span className={smallIcon ? 'icon is-small is-left' : 'icon is-left'}>
                        <i className={icon} />
                    </span>
                )}
                {rightIcon && (
                    <span
                        className={'icon is-small is-right'}
                        onClick={onRightIconClick}
                        style={{
                            pointerEvents: onRightIconClick ? 'initial' : 'none',
                        }}>
                        <i className={rightIcon} />
                    </span>
                )}
            </div>
            {help && <p className={`help ${additionalClasses} ${helpClasses}`}>{help}</p>}
        </div>
    );
}

export default TextInput;
