import React from "react";
import {FaKey, FaPaypal ,FaLightbulb} from "react-icons/fa";


export default function Dots(){
    return(
        <div className="dots--body">
        <img src="./images/dots.png" alt="dotspic" className="dots--pic" />

        <div className="icons--text">

        <div className="outer--circle">
            <FaKey size="2rem" />
        </div>

        <h3>Safe</h3>
        <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Nihil, facilis?</p>
              
        </div>
        {/* -----------*/}

        <div className="icons--text">

        <div className="outer--circle">
            <FaPaypal size="2rem" />
            </div>


        <h3>Easy Payments</h3>
        <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Nihil, facilis?</p>
        </div>
       {/* -----------*/}

        <div className="icons--text">

        <div className="outer--circle"> 
        <FaLightbulb size="2rem" />
        </div>


        <h3>Anytime</h3>
        <p>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Nihil, facilis?</p>
        </div>
        

        <img src="./images/dots.png" alt="dotspic" className="dots--pic"  />

            </div>
    )
}