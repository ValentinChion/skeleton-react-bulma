import React from 'react';
import TimeKeeper from 'react-timekeeper';

import {Title} from '../General';

function TimePicker({title, value, time, callback}) {
    return (
        <div>
            <Title content={title} size='6' />
            <TimeKeeper value={value} onChange={callback} time={time} hour24Mode={true} />
        </div>
    );
}

export default TimePicker;
