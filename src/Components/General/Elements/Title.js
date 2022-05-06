import React from 'react';

function Title({content, horizontal = 'left', size = '3', inlineStyle, additionalClasses}) {
    return (
        <h3 className={`title is-${size} has-text-${horizontal} ${additionalClasses}`} style={inlineStyle}>
            {content}
        </h3>
    );
}

export default Title;
