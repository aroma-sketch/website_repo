import React, {useState} from 'react'
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Edu from "./components/Education/Edu";
import "./App.scss"
import Skills from "./components/Skills/Skills"
import Project2 from "./components/Project2/Project2";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
//import { Menu } from "@material-ui/core";


const App = () => {
    const[menuOpen,setMenuOpen] =  useState(false);
  
    return (
        <div className="app">

       <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

       
            <div className="sections">
           
            <Intro/>
            <Edu/>      
            <Skills/>
            <Project2/>
            
            <Contact/>
            </div>
        

        </div>
    );
}

export default App;
