import React from "react";
import Mobilenav from './Mobilenav';

export default function Navbar(){

return(
    <div className="Navbar">

    <div className="leftside" >

        {/*navbar left */}
        <div className="links">
        <a href="/home">HOME</a>
    <a href="/contact">CONTACT</a>
        </div>

    </div>

    <img src="./images/homesmartlogo.png" alt="homesmartlogo" />
    <Mobilenav />
    {/*navbar right */}

<div className="rightside" >
    <div className="rightbuttons">
    <button className="btn--1" >LOGIN</button>

<button className="btn--2">SIGN UP</button>
    </div>

</div>

    </div>
)
}