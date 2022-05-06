import React, {useState, useEffect} from 'react';

import ajaxLib from '../../../helpers/ajax';

function TrelloFooterCard({cardTitle, clockifyData, listName}) {
    const [isTaskAlreadyInClockify, setIsTaskAlreadyInClockify] = useState(false);
    const [isTaskCreated, setIsTaskCreated] = useState(false);

    useEffect(() => {
        if (clockifyData.map((timeEntry) => timeEntry.desc).includes(cardTitle)) {
            setIsTaskAlreadyInClockify(true);
        }
    }, [clockifyData]);

    const handleClockifyTask = () => {
        ajaxLib
            .post('/trello/send_clockify', {
                title: cardTitle,
                taskTitle: listName,
            })
            .then((data) => {
                if (data.status === 'successfull') {
                    setIsTaskCreated(true);
                }
            });
    };

    return (
        <footer className='card-footer'>
            <button
                className='card-footer-item'
                onClick={handleClockifyTask}
                disabled={isTaskAlreadyInClockify || isTaskCreated}>
                <span>
                    {isTaskAlreadyInClockify ?
                        'Tâche déjà existante' :
                        isTaskCreated ?
                            'Tâche créée !' :
                            'Création tâche Clockify'}
                </span>
            </button>
        </footer>
    );
}

export default TrelloFooterCard;
