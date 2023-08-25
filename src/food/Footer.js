import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTiktok, faTwitter, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import Logo2 from './images1/logo1.jpg';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

export default function Footer(){
    const year = new Date().getFullYear
    return(
        <div className='footer'>
            <div className='container'>
            <div className='footer-wrapper'>
                
                    <div className='logo'>
                        <div className='logo-img'>
                            <img src={Logo2} className='gym'/>
                            <h2>Ayo.B Restaurant</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Odit unde reprehenderit eius sunt iste. Cupiditate!</p>
                        

                    </div>
                   

                
                <div className='footer-box'>
                    <h4 className='footer-title'>Company</h4>
                    <ul className='footer-link'>
                        <li><a href=''>Newsroom</a></li>
                        <li><a href=''>Investor</a></li>
                        <li><a href=''>Careers</a></li>
                        <li><a href=''>Affiliates</a></li>
                        <li><a href=''>Sell stock</a></li>
                        <li><a href=''>Contributors support</a></li>
                        
                    </ul>

            </div>
            <div className='footer-box'>
                    <h4 className='footer-title'>Quick Links</h4>
                    <ul className='footer-link'>
                        <li><a href=''>Plans and pricing</a></li>
                        <li><a href=''>iStock promo</a></li>
                        <li><a href=''>Tips and tricks</a></li>
                        <li><a href=''>Stock photos</a></li>
                        <li><a href=''>Stock videos</a></li>
                        <li><a href=''>Stock illustration</a></li>
                        <li><a href=''>Plugins and apps</a></li>
                        <li><a href=''>License information</a></li>
                        <li><a href=''>Legal/Privacy</a></li>
                        
                    </ul>

            </div>
            <div className='footer-box'>
                    <h4 className='footer-title'>SUPPORT</h4>
                    <ul className='footer-link'>
                        <li><FontAwesomeIcon icon={faPhone} className='ic'/><a href=''>(+234)8132413525</a></li>
                        <li> No 10, Oba Akran, ikeja Lagos</li>
                        <li><a href=''>Contact us</a></li>
                        <li><a href=''>FAQ</a></li>
                        <li><a href=''>Site map</a></li>
                        
                    </ul>
                    <div class="contain">
		  
          <FontAwesomeIcon icon={faFacebook} className='ic p-3'></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTiktok} className='ic p-3'></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTwitter} className='ic p-3'></FontAwesomeIcon>
          <FontAwesomeIcon icon={faYoutube} className='ic p-3'></FontAwesomeIcon>
          <FontAwesomeIcon icon={faLinkedin} className='ic p-3'></FontAwesomeIcon>
          <FontAwesomeIcon icon={faInstagram} className='ic p-3'></FontAwesomeIcon>
                  


            </div>

        </div>
       
       
        </div>
        <p className='copyright'>Copyright <FontAwesomeIcon className='ic' icon={faCopyright}/>2021 - {year} developed by Peter.
        All right reserved.</p>

        
		</div>
        </div>
    )
}