import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTiktok, faTwitter, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo2 from './images1/logo1.jpg'





export default function Head(props){
    const [click, setClick] = React.useState()
    function toggleMenu(){
        setClick(prevClick => !prevClick)
    }
   
    return(
        <div className='navbar'>
            <div className='conntainer'>
            <div className='nav'>
            <div className='header'>
                <img src={Logo2}/>
                
                <h1 ><span className='hed'> AYO.B RESTAURANT</span></h1>
                </div>
            
            

        <ul className={click?'nav-menu-active' : 'nav-menu'}>
            <li><Link to='/'className='nav-link'>Home</Link></li>
             <li><Link to='/Cart' className='nav-link'>Place order </Link></li>
             <li><Link to='/Team' className='nav-link'>Team</Link></li>
            <li><Link to='/Comment' className='nav-link'>Feed Back</Link></li>
            <li><Link to='/Footer' className='nav-link'>Contact Us</Link></li>
            <button className='text-light'>
            <FontAwesomeIcon icon={faCartShopping} className='text-light' />Cart
            <input type="number" id="num" />
            </button>
            {/* <FontAwesomeIcon icon={faToggleOn} className = "togg" onClick={props.toggleDarkMode}/> */}
        </ul>
        
               </div>
               <div className='contin' onClick={toggleMenu}>
                {click? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
               </div>

       </div>
       
       </div>

       

        
    )
}