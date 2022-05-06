import React from 'react';

function Message({color, title, content, deleteFunction}) {
    return (
        <article className={`message ${color}`}>
            <div className='message-header'>
                <p>{title}</p>
                {deleteFunction ? <button className='delete' aria-label='delete' onClick={deleteFunction} /> : ''}
            </div>
            <div className='message-body'>{content}</div>
        </article>
    );
}

export default Message;
