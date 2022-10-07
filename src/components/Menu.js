import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <li>
                <NavLink to="/">
                    Accueil
                </NavLink>
            </li>
            <li>
                <NavLink to="/about">
                    A Propos
                </NavLink>
            </li>
        </nav>
    );
};

export default Menu;