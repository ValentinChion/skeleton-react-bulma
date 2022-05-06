import React from 'react';

function Container({children, additionalClasses = ''}) {
    return <div className={`container is-max-desktop mb-6 ${additionalClasses}`}>{children}</div>;
}

function FluidContainer({children, additionalClasses = ''}) {
    return <div className={`container is-fluid mb-6 ${additionalClasses}`}>{children}</div>;
}

function Box({children, additionalClasses = '', style = {}, onClick}) {
    return (
        <div className={`box ${additionalClasses}`} style={style} onClick={onClick}>
            {children}
        </div>
    );
}

export {Container, Box, FluidContainer};
