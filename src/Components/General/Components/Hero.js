import React from 'react';

function Hero({children, additionalClasses, heroStyle}) {
    return (
        <section className={`hero ${additionalClasses}`} style={heroStyle}>
            <div className='hero-body'>{children}</div>
        </section>
    );
}

export default Hero;
