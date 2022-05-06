import React, {useState} from 'react';

function SelectableRow({id, baseKeyTd, cellsData, children, callback, additionalDataCallback}) {
    const [isSelected, setIsSelected] = useState(false);

    const toggleSelection = (e) => {
        setIsSelected(!isSelected);
        if (callback) {
            callback(id, !isSelected, additionalDataCallback);
        }
    };

    return (
        <tr id={id} className={isSelected ? 'is-selected is-clickable' : 'is-clickable'} onClick={toggleSelection}>
            {cellsData && cellsData.length
                ? cellsData.map((cell, i) => <td key={`cell-${baseKeyTd}-${i}`}>{cell}</td>)
                : children}
        </tr>
    );
}

function Row({id, baseKeyTd, cellsData, children, classes}) {
    return (
        <tr id={id} className={classes}>
            {cellsData && cellsData.length
                ? cellsData.map((cell, i) => <td key={`cell-${baseKeyTd}-${i}`}>{cell}</td>)
                : children}
        </tr>
    );
}

export {SelectableRow as default, SelectableRow, Row};
