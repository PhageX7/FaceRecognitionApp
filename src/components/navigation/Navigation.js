import React from 'react';

function Navigation({onRouteChange}) {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange("signin")}className='f3 dim black link pa3 underline pointer'>Sign Out</p> 
        </nav>
    )
}

export default Navigation;