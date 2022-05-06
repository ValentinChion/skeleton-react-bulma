import React from 'react';

import CheckBox from './CheckBox';

function Radio({
    id,
    radioGroup,
    label,
    index,
    value,
    currentSelected,
    isDisabled = false,
    isCursorNotAllowed = false,
    containerClasses,
    labelClasses,
    callback,
    hasHandlerClosure = true,
}) {
    return (
        <CheckBox
            type={'radio'}
            radioGroup={radioGroup}
            id={id}
            index={index}
            label={label}
            value={value}
            currentSelected={currentSelected}
            isDisabled={isDisabled}
            isCursorNotAllowed={isCursorNotAllowed}
            containerClasses={containerClasses}
            labelClasses={labelClasses}
            callback={callback}
            hasHandlerClosure={hasHandlerClosure}
        />
    );
}

export default Radio;
