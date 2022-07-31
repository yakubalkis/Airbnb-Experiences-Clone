import React from "react";
import iconAir from '../images/icon-airbnb.png'


export default function Navbar(){
    return (
        <nav className="nav-menu">
           <div className="nav-items">
             <img src={iconAir}/>
             <p className="nav-text">airbnb</p>
           </div>
        </nav>
    )
}