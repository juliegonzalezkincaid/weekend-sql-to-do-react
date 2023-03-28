import React from 'react';
import './Header.css';

// props are passed into our function
// component as an argument.
// Destructuring
// const { textColor, headerText, someOtherThing } = props;
function Header() {

    return (
        <div> 
        
            <h1 >
                
                To Do List
            </h1>
           
        
        </div>
    );
}

export default Header;