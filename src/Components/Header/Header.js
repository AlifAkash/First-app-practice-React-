import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="header-container">
            <h1>FriendBook</h1>
            <p>Add your friend and make your salary higher <FontAwesomeIcon icon={faSmileWink} /></p>
        </div>
    );
};

export default Header;