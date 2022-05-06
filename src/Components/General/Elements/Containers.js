import React from 'react';

function Container({children}) {
    return <div className={'container is-max-desktop mb-6'}>{children}</div>;
}

function FluidContainer({children}) {
    return <div className={'container is-fluid mb-6'}>{children}</div>;
}

function Box({children, customStyle, additionalClasses}) {
    return (
        <div className={`box ${additionalClasses}`} style={customStyle}>
            {children}
        </div>
    );
}

export {Container, Box, FluidContainer};
