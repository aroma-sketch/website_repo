
import "./Intro.scss";
import { init} from 'ityped';
import { useEffect, useRef } from "react";
import {Twitter,LinkedIn,YouTube,GitHub} from "@material-ui/icons"
import { motion } from "framer-motion";
import  Fade from "react-reveal/Fade"



const Intro = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: [" Web-Developer !", "Web-Designer!", "Youtuber!" , "Gamer!"],
          });
    }, []);


    return (
        <Fade>
        <div className="intro" id="intro">

             <div className="left">
                <motion.div className="imgcont"
                initial={{opacity:0, y:80}}
                animate={{opacity:1,y:0}}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay:0.4}} >
                    <img  src="u/kkk.png" alt=" me"></img> 
                    </motion.div>
             </div>

             <div className="right">

             <div className="wrapper" 
            //  initial={{opacity:0, y:80}}
            //  animate={{opacity:1,y:0}}
            //  transition={{
            //      ease: 'easeInOut',
            //      duration: 1,
            //      delay:0.4}}
             >
                     
                     <motion.div className="itemcontainer"
                     initial={{opacity:0, y:-80}}
                     animate={{opacity:1,y:0}}
                     transition={{
                         ease: 'easeInOut',
                         duration: 0,
                         delay:0}} >

                         <a href="https://twitter.com/AromaGupta" target="_blank" rel="noreferrer" className="d1"><Twitter className="icons"/></a>
                         <a href="https://www.linkedin.com/in/aroma-g-429595203" target="_blank" rel="noreferrer" className="d2"><LinkedIn className="icons"/></a>
                         <a href="https://www.youtube.com/Elysianaroma" target="_blank" rel="noreferrer" className="d3"><YouTube className="icons"/></a>
                         <a href="https://github.com/aroma-sketch" target="_blank" rel="noreferrer" className="d4"><GitHub className="icons"/></a>
                     </motion.div>
                   <motion.div
                   initial={{opacity:0, y:80}}
                     animate={{opacity:1,y:0}}
                     transition={{
                         ease: 'easeInOut',
                         duration: 1,
                         delay:0.4}}
                   >
                    <h2 >Hi there, I'm</h2>
                    <h1><q>Aroma Gupta</q></h1>
                    <h3><span ref={textRef}></span></h3>
                    </motion.div>
                </div>

                <a href="#project2" className="ff">
                    <img src="u/h.png" alt="go to project as section"/>
                    {/* <p>scroll down</p> */}
                </a>
             </div>


        </div>
        </Fade>
    )
}

export default Intro;
