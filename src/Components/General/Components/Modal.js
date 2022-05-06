import React from 'react';

function Modal({children, isActive, toggleActive, canHide = true}) {
    return (
        <div className={isActive ? 'modal is-active' : 'modal'}>
            {canHide ? (
                <div onClick={toggleActive} className='modal-background' />
            ) : (
                <div className='modal-background' />
            )}
            <div className='modal-content'>{children}</div>
            {canHide && <button onClick={toggleActive} className='modal-close is-large' aria-label='close' />}
        </div>
    );
}

function ImageModal({src, alt, dimensions, isActive, toggleActive, children}) {
    return (
        <div className={`modal ${isActive ? 'is-active' : ''}`}>
            <div className='modal-background' onClick={toggleActive} />
            <div className='modal-content'>
                <p className={`image ${dimensions}`}>{src ? <img src={src} alt={alt} /> : <>{children}</>}</p>
            </div>
            <button className='modal-close is-large' aria-label='close' onClick={toggleActive}></button>
        </div>
    );
}

export default Modal;

export {ImageModal};
