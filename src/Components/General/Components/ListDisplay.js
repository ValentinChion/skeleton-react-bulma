import React from 'react';

function ListDisplay({columns = 3, contents}) {
    const splittedContent = Array(columns);
    for (let i = 0; i < splittedContent.length; i++) {
        splittedContent[i] = [];
    }

    for (let i = 0; i < contents.length; i++) {
        splittedContent[i % columns].push(contents[i]);
    }

    return (
        <div className={'columns'}>
            {splittedContent.map((columnContent, i) => (
                <div className={'column'}>
                    {columnContent.map((content) => (
                        <>{content}</>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default ListDisplay;
