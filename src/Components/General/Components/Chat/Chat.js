import React from 'react';

function Chat({fullWidth, conv = [], withSU = true, username, right = 'from-foreign', left = 'from-me'}) {
    conv.map((msg) => {
        if (withSU) {
            if (msg.fromSuperUser) {
                msg.classe = right;
            } else {
                msg.classe = left;
            }
        } else {
            if (username === msg.username) {
                msg.classe = left;
            } else {
                msg.classe = right;
            }
        }
    });
    return (
        <div className={`chat-container ${fullWidth ? 'in-full-container' : ''}`}>
            {conv &&
                conv.map((msg, i) => (
                    <div
                        key={i}
                        className={`msg-wrapper
                                ${msg.classe}`}>
                        {!msg.withSU ? (
                            <div className='msg-subwrapper'>
                                <div className='username'>{msg.username}</div>
                                <div className='msg'>{msg.content}</div>
                            </div>
                        ) : (
                            <div className='msg'>{msg.content}</div>
                        )}
                    </div>
                ))}
        </div>
    );
}

export default Chat;
