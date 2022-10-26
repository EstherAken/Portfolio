import React from "react";
import Navigation from "./Navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";


export default function Mobilenav(){

    const [open, setOpen]= React.useState(false);

    const hamburger =  <GiHamburgerMenu size="2rem" className="hamburger" onClick={handleClick} />;
    const close =  <AiOutlineClose size="2rem" className="close" onClick={handleClick} />;

    function handleClick(){
        return(
            setOpen(()=> !open)
        )
    }
    return(
        <nav className="nav--mobile">
            {open ? close : hamburger}
       {open &&  <Navigation />}
    </nav>
    )
   
}