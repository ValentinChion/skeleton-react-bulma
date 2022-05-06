import React from 'react';

function FileInput({additionalClasses, handleChange, inputContent, icon = 'fas fa-upload', id, accept, style}) {
    return (
        <div className={`file is-normal ${additionalClasses}`} style={style}>
            <label className='file-label'>
                <input
                    className='file-input'
                    type='file'
                    name='resume'
                    id={id}
                    accept={accept}
                    onChange={handleChange}
                />
                <span className='file-cta'>
                    <span className='file-icon'>
                        <i className={icon}></i>
                    </span>
                    <span className='file-label'>{inputContent}</span>
                </span>
            </label>
        </div>
    );
}

export default FileInput;
