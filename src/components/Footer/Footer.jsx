import React from 'react'
import "./Footer.scss"
import Fade from "react-reveal/Fade";
import {Twitter,LinkedIn,YouTube,GitHub} from "@material-ui/icons";

const Footer = () => {
    return (
        <Fade left>
        <div className="footer" id="footer">

   

            <div className="left">
                <h1>MADE WITH 💖 BY AROMA</h1>
             <button className="main-button" >  <a href="https://github.com/aroma-sketch"
                 target="_blank  " 
                 >⭐star me on github</a> </button>

                </div>
            
            <div className="right">
            <div className="itemcontainer">
            <a href="https://twitter.com/AromaGupta" target="_blank" rel="noreferrer" className="d1"><Twitter className="icons"/></a>
                         <a href="https://www.linkedin.com/in/aroma-g-429595203" target="_blank" rel="noreferrer"  className="d2"><LinkedIn className="icons"/></a>
                         <a href="https://www.youtube.com/Elysianaroma" target="_blank" rel="noreferrer" className="d3"><YouTube className="icons"/></a>
                         <a href="https://github.com/aroma-sketch" target="_blank" rel="noreferrer" className="d4"><GitHub className="icons"/></a>
                   
            </div>
            </div>

         
        </div>
        </Fade>
    )
}

export default Footer
