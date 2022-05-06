import React from 'react';
import {v4 as uuidv4} from 'uuid';

function Select({options, selectedOption, handler, isMultiple = false}) {
    return (
        <div className={isMultiple ? 'select is-multiple' : 'select'}>
            {isMultiple ? (
                <select
                    multiple
                    value={selectedOption}
                    onChange={handler}
                    size={options.length > 12 ? '12' : options.length}>
                    {options &&
                        options.length &&
                        options.map((option) => (
                            <option key={option.id || uuidv4()} value={option.value}>
                                {option.label || option.value}
                            </option>
                        ))}
                </select>
            ) : (
                <select value={selectedOption} onChange={handler}>
                    {options &&
                        options.length &&
                        options.map((option) => (
                            <option key={option.id || uuidv4()} value={option.value}>
                                {option.label || option.value}
                            </option>
                        ))}
                </select>
            )}
        </div>
    );
}

export default Select;
