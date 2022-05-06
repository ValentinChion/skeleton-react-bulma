import React, {useState} from 'react';

import TextInput from './TextInput';

function PasswordInput({name = 'Mot de passe', value, handler, onKeyUp, autocomplete, blur, help, additionalClasses}) {
    const [type, setType] = useState('password');

    const toggleVisibility = () => {
        setType(type === 'password' ? 'text' : 'password');
    };

    return (
        <TextInput
            value={value}
            handler={handler}
            onKeyUp={onKeyUp}
            blur={blur}
            type={type}
            autocomplete={autocomplete}
            name={name}
            help={help}
            additionalClasses={additionalClasses}
            icon={'fas fa-lock'}
            rightIcon={type === 'password' ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}
            onRightIconClick={toggleVisibility}
        />
    );
}

export default PasswordInput;
