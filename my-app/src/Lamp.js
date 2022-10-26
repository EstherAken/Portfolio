import React from "react";
import {AiOutlineDownload} from "react-icons/ai";

export default function Lamp(){

    return(
        <div className="lamp--form--div">

<div className="lamp--div">
<img className="lamp--img" src="./images/lamp.png" alt="lamp pic" />

<button> <AiOutlineDownload size="22px" className="download" />Download App Now</button>

<img className="homecrop" src="./images/homecrop.png" alt="homesmart pic" />
</div>

<div className="form--div" id="great--form">
<h2>Contact Us</h2>    
<form>
<p>ENTER NAME</p>
<input type="text" required />

<p>ENTER EMAIL</p>
<input type="email" required />

<p>ENTER MESSAGE</p>
<textarea />

<div></div>
<button className="form--btn">Sign Up</button>
</form>

</div>

        </div>
    )
}