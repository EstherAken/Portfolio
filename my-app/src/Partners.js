import React from "react";

export default function Partners(){

    return(
        <div className="partners--container" id="great--container">
<div>
    <h1>Our Partners</h1>
    <p> 
        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Magnam atque</span>
    <span> iusto accusamus consequuntur nulla? 
    Dolores quasi nobis aut</span> <span> temporibus ipsum?  </span>
     
    </p>
</div>

{/* experimental flex div */}

<div className="experiment--flex">

<div className="partners--images" id="great">
            <div className="grid--row1" id="great--row--1"><img src="./images/spotify.png" alt="spotify" /></div>
            <div className="grid--row1" id="great--row--1"><img src="./images/dell.png" alt="Dell technologies" /></div>
            <div className="grid--row1" id="great--row--1"><img src="./images/cisco.png" alt="Cisco" /></div>
            <div className="grid--row1" id="great--row--1"><img src="./images/disney.png" alt="Disney" /></div>
            <div className="col--5" id="great--col--5"><img src="./images/deezer.png" alt="Deezer" /></div>
            <div className="col--6" id="great--col--6"><img src="./images/verizon.png" alt="Verizon" /></div>
            <div className="col--7" id="great--col--7"><img src="./images/texas.png" alt="Texas instruments" /></div>
        
        </div>

</div>
        

        </div>
    )
}



