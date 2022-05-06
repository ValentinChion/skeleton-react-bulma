import React from 'react';

import CheckBox from './CheckBox';
import {Title} from '../General';

function CheckBoxContainer({title, checkboxesData, handler}) {
    return (
        <>
            {title && <Title content={title} size='6' />}
            {checkboxesData.map((cbData, i) => (
                <CheckBox
                    key={cbData['id']}
                    handler={handler}
                    id={cbData['id']}
                    name={`cb-${title}-${cbData['id']}`}
                    isChecked={cbData['isChecked']}
                    label={cbData['label']}
                />
            ))}
        </>
    );
}

export default CheckBoxContainer;
