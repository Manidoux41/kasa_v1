import React from 'react';
import Menu from './Menu';

const Header = () => {
    return (
        <header>
            <div className="title">
                <img src="./assets/svg/K.svg" alt="K"/>
                <img src="./assets/svg/house.svg" alt="K"/>
                <img src="./assets/svg/S.svg" alt="S"/>
                <img src="./assets/svg/A.svg" alt="S"/>
            </div>
            <Menu />
        </header>
    );
};

export default Header;