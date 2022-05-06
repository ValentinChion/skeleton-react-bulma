import React from 'react';

import './AppleButton.scss';

import AppleLogo from '../../../assets/images/apple-logo-white-202.png';
import Button from './Button';

function AppleButton({handleClick, content}) {
    return (
        <Button
            handleClick={handleClick}
            buttonStyle={'button is-dark is-apple'}
            content={
                <>
                    <img src={AppleLogo} width='32px' />
                    <span id='apple-btn-content'>{content}</span>
                </>
            }
        />
    );
}

export default AppleButton;
