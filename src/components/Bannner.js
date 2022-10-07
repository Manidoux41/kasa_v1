import React from 'react';

const Bannner = () => {
    return (
        <div className='banner'>
            <h1>Chez vous, partout et ailleurs</h1>
            <div className="overlay">
                <img src="./assets/img/banner.jpg" alt="banner" />
            </div>
        </div>
    );
};

export default Bannner;