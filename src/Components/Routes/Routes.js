import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from '../Paths/HomePage/HomePage';

function Routes() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Switch>
            <Route exact strict path='/'>
                <HomePage />
            </Route>
        </Switch>
    );
}

export default Routes;
