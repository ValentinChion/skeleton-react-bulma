import React from 'react';

function Table({
    tableClasses = 'table',
    headerTopHTML,
    headerTopArray,
    hasHeaderLeft = false,
    footerHTML,
    footerArray,
    rowsHTML,
    arrayTable,
    id,
}) {
    let headerTopContent = '';
    if (headerTopHTML) {
        headerTopContent = headerTopHTML;
    } else if (headerTopArray) {
        headerTopContent = headerTopArray.map((cell, i) => <th key={`${id}-${i}-header`}>{cell}</th>);
    }

    let footerContent = '';
    if (footerHTML) {
        footerContent = footerHTML;
    } else if (footerArray) {
        footerContent = footerArray.map((cell, i) => <th key={`${id}-${i}-footer`}>{cell}</th>);
    }

    return (
        <table className={tableClasses}>
            {headerTopHTML || headerTopArray ? (
                <thead>
                    <tr>{headerTopContent}</tr>
                </thead>
            ) : (
                ''
            )}
            <tbody>
                {(!!rowsHTML && rowsHTML) ||
                    (!!arrayTable &&
                        arrayTable.map((column, j) => (
                            <tr key={`${id}-${j}-row`} id={`${id}-${j}-row`}>
                                {column.map((cell, i) => (
                                    <React.Fragment key={`${id}-${i}-cell`}>
                                        {hasHeaderLeft && i === 0 ? <th>{cell}</th> : <td>{cell}</td>}
                                    </React.Fragment>
                                ))}
                            </tr>
                        )))}
            </tbody>
            {footerHTML || footerArray ? (
                <tfoot>
                    <tr>{footerContent}</tr>
                </tfoot>
            ) : (
                ''
            )}
        </table>
    );
}

function ChildrenTable({
    tableClasses = 'table',
    headerTopHTML,
    headerTopArray,
    hasHeaderLeft = false,
    footerHTML,
    footerArray,
    children,
    id,
    style,
}) {
    let headerTopContent = null;
    if (headerTopHTML) {
        headerTopContent = headerTopHTML;
    } else if (headerTopArray) {
        headerTopContent = headerTopArray.map((cell, i) => <th key={`${id}-${i}-header`}>{cell}</th>);
    }

    let footerContent = null;
    if (footerHTML) {
        footerContent = footerHTML;
    } else if (footerArray) {
        footerContent = footerArray.map((cell, i) => <th key={`${id}-${i}-footer`}>{cell}</th>);
    }

    return (
        <table className={tableClasses} style={style}>
            {headerTopContent && (
                <thead>
                    <tr>{headerTopContent}</tr>
                </thead>
            )}
            <tbody>{children}</tbody>
            {footerContent && (
                <tfoot>
                    <tr>{footerContent}</tr>
                </tfoot>
            )}
        </table>
    );
}

export {Table as default, ChildrenTable};
