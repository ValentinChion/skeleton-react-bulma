import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import '@toast-ui/chart/dist/toastui-chart.min.css';
import 'bulma-toast/dist/bulma-toast.min.js';
import '../assets/scss/cool-tooltips.scss';
import '../assets/scss/badges_notifications.scss';

import Routes from './Routes/Routes';
import Header from './Header/Header';

function App() {
    return (
        <div className='app'>
            <Router>
                <Header />
                <div className='is-height-without-header mb-0'>
                    <Routes />
                </div>
            </Router>
        </div>
    );
}

export default App;
