import React from 'react';

import {Title} from '../Elements';

function Tile({
    children,
    title,
    tileClasses,
    isVertical,
    isBoxLike,
    isAncestor,
    isChild,
    isParent,
    isClickable = false,
    name,
    activeTile,
    selectedTileClasses = 'is-primary',
    onClick,
}) {
    let classes = 'tile';
    if (isAncestor) {
        classes += ' is-ancestor';
    } else if (isParent) {
        classes += ' is-parent';
    }

    if (isVertical) {
        classes += ' is-vertical';
    }

    let childClasses = 'tile';
    if (isChild) childClasses += ' is-child';
    if (isBoxLike) {
        childClasses += ' box';
    }

    if (name && name === activeTile) {
        childClasses += ` ${selectedTileClasses}`;
    }

    if (tileClasses) {
        classes += ` ${tileClasses}`;
        childClasses += ` ${tileClasses}`;
    }

    if (title) {
        title = <Title content={title} size={'4'} />;
    }

    const onClickTile = () => {
        onClick(name);
    };

    return (
        <>
            {(isAncestor || isParent) && <div className={classes}>{children}</div>}

            {!isAncestor &&
                !isParent &&
                (isClickable ? (
                    <a onClick={onClickTile}>
                        <div className={childClasses}>
                            {title}
                            {children}
                        </div>
                    </a>
                ) : (
                    <div className={childClasses}>
                        {title}
                        {children}
                    </div>
                ))}
        </>
    );
}

export default Tile;
