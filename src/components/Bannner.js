import React from 'react';
import banner from '../assets/img/banner.jpg';

const Bannner = () => {
    return (
        <div className='banner'>
            <h1>Chez vous, partout et ailleurs</h1>
            <div className="overlay">
                <img src={banner} alt="banner" />
            </div>
        </div>
    );
};

export default Bannner;