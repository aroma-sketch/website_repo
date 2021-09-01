import React from 'react'
import "./Header.scss";
 import {Mail} from "@material-ui/icons"


export default function Header({ menuOpen, setMenuOpen}) {
    return (
        <div className={"header " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
            <a aria-current="page" 
            class="logo active" 
            tag="[object Object]"
             href="#intro">
                 <span> &lt;</span>
                  <span  className="logo-name">Aroma gupta</span>
                  <span >/&gt;</span>
            </a>
                    <div className="itemContainer">
                        {/* <Person className="icons" /> */}
                        
                    </div>
                    <div className="itemContainer">
                        <Mail className="icons"/>
                        <span>guptaaroma9@gmail.com</span>
                    </div>
           </div>

           <div className="right">
                   <div className="hamburger" 
                 onClick={() => setMenuOpen(!menuOpen)} >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
           </div>


        </div>
        </div>
    );
}


