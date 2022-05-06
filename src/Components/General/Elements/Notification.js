import React, {useState, useEffect} from 'react';
import Parser from 'html-react-parser';

import {NotificationContext} from '../../App';

import './Notification.scss';

function Notification({type = 'info', withDelete = true, deleteHandler, content, additionalClasses}) {
    const [displayNotif, setDisplayNotif] = useState(true);

    const handleDelete = () => {
        setDisplayNotif(!displayNotif);
    };

    return (
        <>
            {displayNotif && (
                <div className={`notification is-${type} ${additionalClasses}`}>
                    {withDelete && <button className='delete' onClick={deleteHandler || handleDelete}></button>}
                    {content}
                </div>
            )}
        </>
    );
}

function NotificationContainer({position}) {
    const {notificationsState, notificationsDispatch} = React.useContext(NotificationContext);

    useEffect(() => {
        if (notificationsState.isPushing) {
            const lastNotification = notificationsState.notifications[notificationsState.notifications.length - 1];
            if (lastNotification.autoDelete) {
                const handleDelete = deleteNotification(
                    notificationsState.notifications[notificationsState.notifications.length - 1].id,
                );
                setTimeout(() => {
                    handleDelete();
                }, lastNotification.dismissTime);
            }
            notificationsDispatch({type: 'FINISHED_PUSH'});
        }
    }, [notificationsState.isPushing]);

    const deleteNotification = (id) => () => {
        notificationsDispatch({
            type: 'ADD_FADE_OUT',
            payload: {id},
        });

        setTimeout(
            () =>
                notificationsDispatch({
                    type: 'UNLOAD',
                    payload: {notificationToDeleteId: id},
                }),
            600,
        );
    };

    /* eslint-disable new-cap */
    return (
        <div className={`notification-container ${position}`}>
            {notificationsState.notifications.map((notification, i) => (
                <div key={notification.id} className={`notification ${notification.className} ${position}`}>
                    <button className='delete' onClick={deleteNotification(notification.id)} />
                    <div>
                        <p className='notification-message'>{Parser(notification.content)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

const printNotification = (
    notificationsDispatcher,
    content,
    className = 'is-danger',
    dismissTime = 3000,
    autoDelete = true,
) => {
    if (notificationsDispatcher) {
        notificationsDispatcher({
            type: 'PUSH',
            payload: {content, className, dismissTime, autoDelete},
        });
    }
};

export {Notification, NotificationContainer, printNotification};
