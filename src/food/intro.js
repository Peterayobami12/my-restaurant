import React from 'react';
import LOGO from './images1/logo.jpg';
import { Link } from 'react-router-dom';
import './intro.css';

function intro() {
  return (
    <div className='intro'>
        <div className='intro-container'>
            <div className='content'>
                <h2>Ayo.B Fast food</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, voluptatum sed provident 
               distinctio dignissimos ullam odit recusandae vero ut
                nesciunt! <Link to="/" class="btn">Read more</Link></p>
            
            <div className='content-image'>
                <img src={LOGO} id='logo'/>

            </div>
            </div>
            <div className='card border text-light cardss'
            data-aos ='zoom-in' data-aos-duration ='1500'>
                <h2 className='text-center'>MENU</h2>
                <div  className='list'>
                <ul>
                    <li>POUNDED-YAM   #4000</li>
                    <li>JOLLOF-RICE & CHICKEN   #3500</li>
                    <li>EBA & VEGETABLE   #3000</li>
                    <li>WHEAT & VEGETABLE   #3000</li>
                    <li>FUFU & VEGETABLE   #3000</li>
                    <li>SPAGHETTI & CHICKEN   #4000</li>
                    <li>RICE, BEANS AND DODO   #3500</li>
                    <li>PIZZA   #5000</li>
                    <li>MEAT PEPPERSOUP   #5000</li>
                    <li>FRIED-RICE & CHICKEN   #4000</li>
                    <li>EWA-AGONYIN & PLANTAIN   #2500</li>
                    <li>CAT-FISH PEPPERSOUP   #3000</li>
                </ul>
                <ul>
                <li>Paster #4500</li>
                    <li>SPAGHETTI & CHICKEN   #3000</li>
                    <li>NKOBI   #2000</li>
                    <li>BURGER   #5000</li>
                    <li>CHICKEN AND CHIPS   #3200</li>
                    <li>CHICKEN PEPPERSOUP   #4000</li>
                    <li>WHITE RICE & MEATSAUCE #2500</li>
                    <li>SPAGHETTI BOLOGNESE  #4000</li>

                </ul>
                </div>
                

            </div>



        </div>
    </div>
  )
}

export default intro