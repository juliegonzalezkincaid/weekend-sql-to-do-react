import React from 'react';
import './Header.css';

// props are passed into our function
// component as an argument.
// Destructuring
// const { textColor, headerText, someOtherThing } = props;
function Header({ textColor, headerText, someOtherThing }) {

    return (
        <header>
            <h1 style={{color: textColor}}>
                {headerText}
                To Do List
            </h1>
            <h2>{someOtherThing}</h2>
        </header>
    );
}

export default Header;