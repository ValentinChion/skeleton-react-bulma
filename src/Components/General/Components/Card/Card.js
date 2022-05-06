import React from 'react';

function Card({title, content, footer}) {
    return (
        <div className='card'>
            {title ? (
                <header className='card-header'>
                    <p className='card-header-title'>{title}</p>
                </header>
            ) : (
                ''
            )}
            {content ? (
                <div className='card-content'>
                    <div className='content'>{content}</div>
                </div>
            ) : (
                ''
            )}
            {footer ? footer : ''}
        </div>
    );
}

function ChildrenCard({
    title,
    children,
    footer,
    inlineStyle,
    inlineStyleContent,
    id,
    collapsibleRef,
    additionalCardClasses = '',
    additionalCardContentClasses = '',
}) {
    const innerContent = (
        <React.Fragment>
            <div className={`card-content ${additionalCardContentClasses}`} style={inlineStyleContent}>
                <div className='content'>{children}</div>
            </div>
            {footer ? footer : ''}
        </React.Fragment>
    );

    const header = title ? (
        <header className='card-header'>
            <p className='card-header-title'>{title}</p>
        </header>
    ) : (
        ''
    );

    return (
        <div className={`card ${additionalCardClasses}`} style={inlineStyle}>
            {collapsibleRef ? <a href={`#${id}`}>header</a> : header}
            {collapsibleRef ? (
                <div id={id} ref={collapsibleRef} className='is-collapsible'>
                    {innerContent}
                </div>
            ) : (
                <>{innerContent}</>
            )}
        </div>
    );
}

function ImageCard({children, src, alt, dimensionsClass = 'is-2by1', cardClasses, maxWidth, onClick}) {
    return (
        <div
            onClick={onClick}
            className={`card ${cardClasses}`}
            style={{
                width: '100%',
                maxWidth: `${maxWidth}px`,
                height: '100%',
                maxHeight: `${maxWidth / 2}px`,
            }}>
            <div className='card-image'>
                <figure className={`image ${dimensionsClass}`}>
                    {src ? <img src={src} alt={alt} /> : <>{children}</>}
                </figure>
            </div>
        </div>
    );
}

export {Card, ChildrenCard, ImageCard};
