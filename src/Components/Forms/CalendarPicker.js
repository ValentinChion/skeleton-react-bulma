import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';

import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar';

import {TextInput} from '../Forms';
import {Title} from '../General';

moment.locale('fr');

function CalendarPicker({title, additionalClasses, value, callback, placeholder, minDate, id, isDisabled}) {
    return (
        <div className={additionalClasses}>
            <Title content={title} size='5' />
            <TextInput
                value={value ? moment(value).format('LL') : ''}
                isReadOnly={true}
                additionalClasses={'is-cursor-not-allowed'}
            />
            <Calendar onChange={callback} minDate={minDate} value={value} />
        </div>
    );
}

export default CalendarPicker;
