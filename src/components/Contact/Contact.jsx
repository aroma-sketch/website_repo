import React, {useState} from 'react'
import "./Contact.scss";
import Footer from "../Footer/Footer";
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(true);
    };

    return (
        <div className="contact" id="contact">
           
           <div className="items">
           <Fade left>
             <div className="left" >
               
                <img src="u/shake.svg" alt="" />
            </div>
            </Fade>
            <Fade right>
            <div  className="right">
                <h3>CONNECT WITH ME :)</h3>

                <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />

          <textarea placeholder="Message">
          </textarea>

          <motion.button animate={{scale:1.5,scale:1}} type="submit">Send
          </motion.button >

          {message && <span>Thanks, I'll reply ASAP :)
                     </span>}
                </form>

            </div>
            </Fade>
            </div>
             <div className="n">
             <Footer/> 
            </div> 
        </div>
    )}

export default Contact;
