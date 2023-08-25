import React from "react";
import Head from '../food/Head';
import Cart from '../food/Cart';
import Footer from '../food/Footer';
import Team from '../food/Team';
import Comment from '../food/Comment';
import Intro from "../food/intro";

export default function Home(){
    const [darkMode, setDarkMode] = React.useState()
function toggleDarkMode(){
  setDarkMode(prevMode => !prevMode)
}

    return(
        <div className ={darkMode? "black" : ""}>
    
      
  
        <Head darkMode = {darkMode} toggleDarkMode = {toggleDarkMode}/>
         <Intro />

         <Cart />
         
         <Team />
         
         
         <Comment />
         
         <Footer />
      
        
         
          </div>
    )
}