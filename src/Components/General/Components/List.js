import React from 'react';

function List({visibleActions = false, children}) {
    return (
        <>
            <div className={visibleActions ? 'list has-visible-pointer-controls' : 'list'}>{children}</div>
        </>
    );
}

function ListItem({img, title, desc, children}) {
    return (
        <div className='list-item'>
            <div className='list-item-content'>
                {img && (
                    <div className='list-item-image'>
                        <figure className='image is-64x64'>
                            <img className='is-rounded' src={img} />
                        </figure>
                    </div>
                )}
                {title && <div className='list-item-title'>{title}</div>}
                {desc && <div className='list-item-description'>{desc}</div>}
            </div>
            {children && (
                <div className='list-item-controls'>
                    <div className='buttons is-right'>{children}</div>
                </div>
            )}
        </div>
    );
}

export {List, ListItem};
