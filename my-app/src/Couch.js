import React from "react";
import {AiOutlineDownload} from "react-icons/ai";

export default function Couch(){


    return(
        <div className="couch--co">
            
     <div className="couch--container">
<div className="couch">
<img src="./images/couch.png" alt="couch" className="couch--image" />
</div>

<div className="homesmart--container">
<img src="./images/homesmart.png" alt="homesmart" className="homesmart--pic" />

</div>
</div>
<div className="btn--div">
<button className="couch--btn"><AiOutlineDownload id="download" size="22px" /> Download The App</button>
</div>


        </div>
   

        
    )
}