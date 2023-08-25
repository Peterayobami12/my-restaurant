import React from "react";
import peter from './images1/shipman-northcutt-sgZX15Da8YE-unsplash.jpg';
import godwin from './images1/godwin.jpg';
import james from './images1/james.jpg';
import mary from './images1/mary.jpg';
import precious from './images1/precious.jpg';
import sarah from './images1/sarah.jpg';
import { faFacebook, faTiktok, faTwitter, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";






export default function Team(){
    return(
        <div className="mt-3">
            <h1 className="text-center">MEET OUR TEAM</h1>
            <div className="card-group text-center " >
                <div className="card border-dark"
                data-aos ='fade-up'
                data-aos-duration ='1500'>
                    <img src={peter} className="card-img-top" />
                    <div className="card-body ">
                        <h3>AJAYI PETER</h3>
                        <p>CHIEF EXECUTIVE OFFICER</p>
                        <div className="text-center ">
                        <FontAwesomeIcon className="cc p-1 text-primary" icon={faFacebook} />
                            <FontAwesomeIcon className="cc p-1 text-danger" icon={faInstagram} />
                            <FontAwesomeIcon className="cc p-1 text-danger" icon={faLinkedin} />
                            
                        </div>

                    </div>

                </div>
                <div className="card border-dark" data-aos ='fade-up'
                 data-aos-duration ='1500'>
                    <img src={james} className="card-img-top"/>
                    <div className="card-body">
                        <h3>JAMES BIY</h3>
                        <p>GENERAL MANAGER</p>
                        <div className="text-center ">
                        <FontAwesomeIcon className="cc p-1 text-primary" icon={faFacebook} />
                            <FontAwesomeIcon className="cc p-1 text-danger" icon={faInstagram} />
                            <FontAwesomeIcon className="cc p-1 text-danger" icon={faLinkedin} />
                            
                        </div>

                    </div>

                </div>
                <div className="card border-dark"
                data-aos ='fade-up'
                data-aos-duration ='1500'>
                    <img src={mary} className="card-img-top"/>
                    <div className="card-body">
                        <h3>MARY JANE</h3>
                        <p>HUMAN RESOURCES MANAGER</p>
                        <div className="text-center ">
                        <FontAwesomeIcon className="cc p-1 text-primary" icon={faFacebook} />
                            <FontAwesomeIcon className="cc p-1 text-danger" icon={faInstagram} />
                            <FontAwesomeIcon className="cc p-1 text-danger" icon={faLinkedin} />
                            
                        </div>

                    </div>

                </div>
                <div className="card border-dark"
                data-aos ='fade-up'
                data-aos-duration ='1500'>
                    <img src={godwin} className="card-img-top"/>
                    <div className="card-body">
                        <h3>GODWIN EDWARD</h3>
                        <p>HEAD OF LOGISTICS</p>
                        <div className="text-center ">
                        <FontAwesomeIcon className="cc p-1 text-primary" icon={faFacebook} />
                            <FontAwesomeIcon className="cc p-1 text-danger" icon={faInstagram} />
                            <FontAwesomeIcon className="cc p-1 text-danger" icon={faLinkedin} />
                        </div>

                    </div>

                </div>
                <div className="card border-dark"
                data-aos ='fade-up'
                data-aos-duration ='1500'>
                    <img src={precious} className="card-img-top"/>
                    <div className="card-body">
                        <h3>PRECIOUS SMITH</h3>
                        <p>CHIEF CHEF</p>
                        <div className="text-center ">
                            <FontAwesomeIcon className="cc p-1 text-primary" icon={faFacebook} />
                            <FontAwesomeIcon className="cc p-1 text-danger" icon={faInstagram} />
                            <FontAwesomeIcon className="cc p-1 text-danger" icon={faLinkedin} />
                            
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}