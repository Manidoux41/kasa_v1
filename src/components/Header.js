import React from 'react';
import K from '../assets/svg/K.svg';
import house from '../assets/svg/house.svg';
import S from '../assets/svg/S.svg';
import A from '../assets/svg/A.svg';
import Menu from './Menu';


const Header = () => {
    return (
        <header>
            <div className="title">
                <img src={K} alt="K"/>
                <img src={house} alt="house"/>
                <img src={S} alt="S"/>
                <img src={A} alt="A"/>
            </div>
            <Menu />
        </header>
    );
};

export default Header;