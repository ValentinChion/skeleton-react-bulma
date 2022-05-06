import React from 'react';

function SquareImage({img, isRounded = false, size, alt}) {
    return (
        <figure className={`image is-${size}x${size} mr-4`}>
            {img && <img className={isRounded ? 'is-rounded' : ''} src={img} width={size} height={size} alt={alt} />}
        </figure>
    );
}

function ProfileImage({img, width}) {
    return (
        <div
            className='profile-pic-container'
            style={{
                backgroundImage: `url('${img}')`,
                width: `${width}px`,
                height: `${width}px`,
            }}></div>
    );
}

export {ProfileImage, SquareImage};
