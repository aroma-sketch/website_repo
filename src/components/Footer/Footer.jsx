import React ,{useState, useEffect} from 'react';
import "./Footer.scss";
import Fade from "react-reveal/Fade";
import {Twitter,LinkedIn,YouTube,GitHub} from "@material-ui/icons";

const Footer = () => {
    const [count, setCount] = useState(null);
    useEffect(() => {
      fetch("https://api.countapi.xyz/update/aroma2/website/?amount=1")
        .then((res) => res.json())
        .then((json) => setCount(json.value));
    }, []);

    return (
        <Fade left>
        <div className="footer" id="footer">

   

            <div className="left">
                <div className="vc">
                <h1>MADE WITH 💖 BY AROMA</h1>
                {count && <h3> {count} VISITORS </h3>}
                </div>
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
