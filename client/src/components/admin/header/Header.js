import React from 'react';

const Header = ({ title }) => (
    <header id="home" className="">
        <div className="overlay"></div>
        <div className="content">
            <h2>{ title }</h2>
        </div>
    </header>
);

export default Header;
