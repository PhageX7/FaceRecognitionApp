import React from 'react';

function Navigation({onRouteChange, isSignedIn}) {
   
        if(isSignedIn === true){
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange("signin")}className='f3 dim black link pa3 underline pointer'>Sign Out</p> 
                </nav>
            );
        }
        else if (isSignedIn === false){
                return (
                    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onRouteChange("signin")}className='f3 dim black link pa3 underline pointer'>Sign In</p> 
                    <p onClick={() => onRouteChange("register")}className='f3 dim black link pa3 underline pointer'>Register</p> 
                    </nav>
                ); 
        }
}

export default Navigation;