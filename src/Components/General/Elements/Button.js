import React from 'react';

import './Button.scss';

function Button({
    children,
    type = 'button',
    content,
    id,
    handleClick,
    buttonStyle = 'button is-primary',
    inlineStyle,
    isDisabled,
    isLoading,
    tooltipContent,
    tooltipPosition = 'has-tooltip-top',
}) {
    return (
        <>
            {type === 'button' ? (
                <button
                    className={`${buttonStyle} ${tooltipPosition} ${isLoading ? 'is-loading' : ''}`}
                    style={inlineStyle}
                    disabled={isDisabled || isLoading}
                    id={id}
                    onClick={handleClick}
                    data-tooltip={tooltipContent}>
                    {content}
                    {children}
                </button>
            ) : (
                ''
            )}

            {type === 'submit' ? (
                <input
                    type='submit'
                    className={`${buttonStyle} ${tooltipPosition} ${isLoading ? 'is-loading' : ''}`}
                    style={inlineStyle}
                    disabled={isDisabled || isLoading}
                    id={id}
                    value={content}
                    onClick={handleClick}
                />
            ) : (
                ''
            )}

            {type === 'submit-button' ? (
                <button
                    type='submit'
                    className={`${buttonStyle} ${tooltipPosition}`}
                    style={inlineStyle}
                    disabled={isDisabled}
                    id={id}
                    onClick={handleClick}>
                    {content}
                    {children}
                </button>
            ) : (
                ''
            )}
        </>
    );
}

function ShadyButton({children, tooltipContent, isSticky, handleClick, additionalClasses}) {
    return (
        <div className={`shady-container ${isSticky ? 'is-sticky' : ''}`} onClick={handleClick}>
            <div className={`shady-button ${additionalClasses}`}>
                <div className={`shady-tooltip ${tooltipContent ? 'is-active' : ''}`}>{tooltipContent}</div>
                {children}
            </div>
        </div>
    );
}

export {Button as default, ShadyButton};
