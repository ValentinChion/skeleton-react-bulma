import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Header() {
    const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);

    return (
        <nav className='navbar is-fixed-top' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                {/* Add Logo here */}
                <button
                    className='button is-link is-inverted navbar-burger'
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarBasicExample'
                    onClick={() => {
                        setIsBurgerMenuActive(!isBurgerMenuActive);
                    }}>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </button>
            </div>

            <div id='header' className={`navbar-menu ${isBurgerMenuActive ? 'is-active' : ''}`}>
                <div className='navbar-start'>
                    <Link to='/example' className='navbar-item'>
                        <i className='fas fa-marker mr-2' />
                        Exemple
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;
