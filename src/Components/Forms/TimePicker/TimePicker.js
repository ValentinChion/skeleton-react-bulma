import React, {useState, useEffect, useRef} from 'react';
import TimeKeeper from 'react-timekeeper';
import {v4 as uuidv4} from 'uuid';

import './TimePicker.scss';

import {Title, Dropdown, DropdownItem} from '../../General';
import TextInput from '../TextInput';

const formatHours = (newHours) => {
    if (+newHours > 0 && +newHours < 24) {
        if (+newHours < 10) {
            return '0' + +newHours;
        } else {
            return '' + +newHours;
        }
    } else {
        return '00';
    }
};
const formatMinutes = (newMinutes) => {
    if (+newMinutes > 0 && +newMinutes < 60) {
        if (+newMinutes < 10) {
            return '0' + +newMinutes;
        } else {
            return '' + +newMinutes;
        }
    } else {
        return '00';
    }
};

function TimePickerGoogle({title, value, time, callback}) {
    return (
        <div>
            <Title content={title} size='6' />
            <TimeKeeper value={value} onChange={callback} time={time} hour24Mode={true} />
        </div>
    );
}

function TimePicker({inputSize = '', is2DigitsWidth = true, baseHours, baseMinutes, hook, placeholder, sliceMinutes}) {
    const minutesArray =
        sliceMinutes &&
        Array(60 / sliceMinutes)
            .fill(0)
            .map((_, i) => {
                if (i === 0) return '00';
                return `${i * sliceMinutes}`;
            });
    const [hoursValue, setHoursValue] = useState(formatHours(baseHours));
    const [minutesValue, setMinutesValue] = useState(!sliceMinutes ? formatMinutes(baseMinutes) : baseMinutes);
    const hoursRef = useRef(null);
    const minutesRef = useRef(null);

    useEffect(() => {
        formatAndSetHours(baseHours);
    }, [baseHours]);

    useEffect(() => {
        if (!sliceMinutes) formatAndSetMinutes(baseMinutes);
    }, [baseMinutes]);

    useEffect(() => {
        if (hook && hoursValue !== undefined && minutesValue !== undefined) {
            hook(hoursValue || '00', minutesValue || '00');
        }
    }, [hoursValue, minutesValue]);

    const formatAndSetHours = (newHours) => {
        setHoursValue(formatHours(newHours));
    };

    const formatAndSetMinutes = (newMinutes) => {
        setMinutesValue(formatMinutes(newMinutes));
    };

    const handleHoursChange = (e) => {
        setHoursValue(e.target.value);
        if (!sliceMinutes && e.target.value.length > 1) {
            minutesRef.current.focus();
        }
    };

    const handleMinutesChange = (value) => {
        setMinutesValue(value);
    };

    return (
        <div className='is-flex'>
            <TextInput
                type='number'
                propRef={hoursRef}
                value={hoursValue}
                additionalClasses={`without-arrows has-text-right ${inputSize} ${
                    is2DigitsWidth ? 'two-digits-width' : ''
                }`}
                wrapperClasses='mb-0'
                handler={handleHoursChange}
                blur={(e) => formatAndSetHours(e.target.value)}
                min='00'
                step='1'
                max='24'
            />
            <div className='is-flex is-align-items-center pl-2 pr-2 is-size-4 has-text-weight-semibold'>
                <span>:</span>
            </div>
            {sliceMinutes ? (
                <Dropdown name={'00'} selectedName={minutesValue} additionalClasses={'mb-4'}>
                    {minutesArray.map((minutesItem) => (
                        <DropdownItem key={uuidv4()} value={minutesItem} callback={handleMinutesChange}>
                            {minutesItem}
                        </DropdownItem>
                    ))}
                </Dropdown>
            ) : (
                <TextInput
                    type='number'
                    propRef={minutesRef}
                    value={minutesValue}
                    additionalClasses={`without-arrows ${inputSize} ${is2DigitsWidth ? 'two-digits-width' : ''}`}
                    wrapperClasses='mb-0'
                    handler={(e) => setMinutesValue(e.target.value)}
                    blur={(e) => formatAndSetMinutes(e.target.value)}
                    min='00'
                    step='1'
                    max='60'
                />
            )}
        </div>
    );
}

export {TimePickerGoogle, TimePicker};
