import React from 'react';
import "./Project2.scss";
import Fade from 'react-reveal/Fade';


export const Project2 = () => {
  return (
    <div className="project2" id="project2">
      <div className="contaner">
          <h1 >PROJECTS </h1>

      <Fade left>
         <div className="cards">
         <img  style={{height: "100px",width:"250px"}}src="https://user-images.githubusercontent.com/78024790/133047760-e02d3afd-1ee5-43ed-9607-cafb0f8945e6.png "/>
       <h2>WEB-BROWSER EXTENSION-(SOCIO-LAUNCHER)
           <p>a browser extension named,SOCIO-LAUNCHER useful to early
             <br/> acess to your socail handles(i personally use this😎)</p>
          <a href="https://github.com/aroma-sketch/Socio-launcher" target="_blank"> <button>VIEW PROJECT</button></a>
          </h2>

           
         </div>
         </Fade >

         <Fade right>
         <div className="sp-cards">
           <img style={{height: "100px",width:"250px"}} src="https://user-images.githubusercontent.com/78024790/132755001-cb4e29cb-2178-4a91-bccb-486855c580ed.png"/>
         <h2>PORTFOLIO WEBSITE
           <p>a portfolio website using react-libraries </p>
           <a href="https://github.com/aroma-sketch/website_repo" target="_blank"><button>VIEW PROJECT</button></a>
           </h2>
         </div>
         </Fade>

         <Fade left>
         <div className="cards">
           <img style={{height: "100px",width:"200px"}} src=" https://user-images.githubusercontent.com/78024790/133394344-356f17a4-d2f0-46df-8d06-23d162e70f12.png"/>
         <h2>VISITORS COUNTER PAGE
           <p>simple html website count the no. of visitors</p>
           <a href="https://aroma-sketch.github.io/Visitors-count-/" target="_blank"><button>VIEW PROJECT</button></a>
           </h2>
         </div>
         </Fade>

         <Fade right>
       <div className="sp-cards">
       <img  style={{height: "100px",width:"200px"}} src="https://user-images.githubusercontent.com/78024790/132957132-e4c504e8-8583-45a1-9b50-956d86bc1bdb.png"/>
           <h2  >TO-D0-LIST-APP
           <p   >a simple react to-do-list application allow user to note down their work</p>
            <a href=" https://aroma-todolist.netlify.app" target="_blank"><button>VIEW PROJECT</button></a>
            </h2>
     
          </div>
         </Fade>

         <Fade left>
         <div className="cards">
           <img style={{height: "100px",width:"200px"}} src="https://user-images.githubusercontent.com/78024790/134765402-d630764c-22a1-403a-a1ad-2d51430a331d.png"/>
         <h2>MUSIC PLAYER
           <p>A web application built with with vanilla-js, html and css  </p>
           <a href="https://aroma-musicplayer.netlify.app/" target="_blank"><button>VIEW PROJECT</button></a>
           </h2>
         </div>
         </Fade>

       </div>
       </div>


    
  )
}

export default Project2;
