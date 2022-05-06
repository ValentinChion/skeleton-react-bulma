import React, {useState} from 'react';

import TextInput from './TextInput';

function TextInputSelfState({name, callback, callbackData, baseValue = ''}) {
    const [content, setContent] = useState(baseValue);

    const handleChange = (e) => {
        setContent(e.target.value);
        callback(e.target.value, callbackData);
    };

    return <TextInput value={content} name={name} handler={handleChange} />;
}

export default TextInputSelfState;
