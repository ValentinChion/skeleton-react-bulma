import React from 'react';

function Digits({digits}) {
    return (
        <nav className='level'>
            {digits &&
                digits.map((digit) => (
                    <div className={'level-item has-text-centered'} key={digit.key}>
                        <div>
                            <p className={`heading ${digit.inlineAddClasses ? digit.inlineAddClasses : ''}`}>
                                {digit.title}
                            </p>
                            <p className={`title ${digit.inlineAddClasses ? digit.inlineAddClasses : ''}`}>
                                {digit.number}
                            </p>
                        </div>
                    </div>
                ))}
        </nav>
    );
}

export default Digits;
