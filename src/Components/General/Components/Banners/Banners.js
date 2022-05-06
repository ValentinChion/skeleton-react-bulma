import React from 'react';

import './Banners.scss';

function Banner({name, src, alt, secondary, nameStyle, secondaryStyle, fontFactor = 1, additionalClasses}) {
    return (
        <>
            <img src={src} alt={alt} className={`banner ${additionalClasses}`} />
            {nameStyle && secondaryStyle ? (
                <>
                    <span
                        className='evenement-name'
                        style={{
                            ...nameStyle,
                            fontSize: `${nameStyle.fontSize * fontFactor}%`,
                        }}>
                        {name}
                    </span>
                    <span
                        className='by-who'
                        style={{
                            ...secondaryStyle,
                            fontSize: `${secondaryStyle.fontSize * fontFactor}%`,
                        }}>
                        {secondary}
                    </span>
                </>
            ) : (
                ''
            )}
        </>
    );
}

function DownloadBanner({src, alt, width = 960, height = 480, imgClasses}) {
    if (Math.round(width / height) !== 2) {
        /* eslint-disable no-console */
        console.warn('Banner should have a 2 ratio (width bigger)');
    }

    const style = {};
    if (width) {
        style.width = `${width}px`;
    }
    if (height) {
        style.height = `${height}px`;
    }

    return (
        <div className='dl-banner-wrapper image is-2by1' style={style}>
            <img src={src} alt={alt} className={imgClasses} />
        </div>
    );
}

export {Banner, DownloadBanner};
