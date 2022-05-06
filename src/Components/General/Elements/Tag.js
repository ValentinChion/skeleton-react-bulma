import React from 'react';

function Tag({
    leftContent,
    leftColor = 'is-dark',
    rightContent,
    rightColor = 'is-primary',
    additionalStyle = {},
    deleteHandler,
}) {
    let tag = <></>;

    if (leftContent && rightContent) {
        tag = (
            <div className='control'>
                <div className='tags has-addons' style={additionalStyle}>
                    <span className={`tag ${leftColor}`}>{leftContent}</span>
                    <span className={`tag ${rightColor}`}>{rightContent}</span>
                </div>
            </div>
        );
    } else {
        tag = (
            <span className={`tag ${leftColor}`} style={additionalStyle}>
                {leftContent}
            </span>
        );

        if (deleteHandler) {
            tag = (
                <div className='control'>
                    <div className='tags has-addons'>
                        <span className={`tag ${leftColor}`}>{leftContent}</span>
                        <a onClick={deleteHandler} className={'tag is-delete'} />
                    </div>
                </div>
            );
        }
    }

    return <>{tag}</>;
}

export default Tag;
