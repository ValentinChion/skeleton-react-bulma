import React from 'react';

function Section({children, size = ''}) {
    return <section className={`section ${size}`}>{children}</section>;
}

export default Section;
