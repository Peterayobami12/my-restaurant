import React from 'react';
import pyam from '../food/images1/pounded-yam.jpg';
import amala from '../food/images1/Amala-gbegiri.jpg';
import fufu from '../food/images1/fufu-egusi.jpg';
import wheat from '../food/images1/wheat-efo.jpg';
import eba from '../food/images1/Eba-efo.jpg';
import jollof from '../food/images1/jollof-chicken.jpg';
import spag from '../food/images1/spaghetti-chicken.jpg';
import frice from '../food/images1/Fried-rice-chicken.jpg';
import rbeans from '../food/images1/Rice-and-beans.jpg';
import pizza from '../food/images1/Pizza.jpg';
import agonyin from '../food/images1/ewa-agoyin.jpg';
import catfish from '../food/images1/Catfish-Peppersoup.jpg';
import psoup from '../food/images1/pepper-soup-goat-meat.jpeg';
import Aos from 'aos';
import Paster from '../food/images1/pastameatsauce.jpeg';
import Burger from '../food/images1/burger.jpeg';
import Chickenchips from '../food/images1/chickenchips.jpeg';
import Chickensoup from '../food/images1/chickenpeppersoup.jpeg';
import Whiterice from '../food/images1/whitericemeatsauce.jpeg';
import Spaghettibolog from '../food/images1/spaghettibolognese.jpeg';
import Spicychicken from '../food/images1/spicychicken.jpeg';
import poundokra from '../food/images1/poundedyamokro.jpeg';
import spagchicken from '../food/images1/spaghetti-chicken.jpg';
import nkobi from '../food/images1/nkwobi.jpg';


export default function Cart(props){
  // let badgeText
  // if (props.status.soldout === 0){
  //   badgeText = "SOLD OUT"
  // } else if (props.status.available === "available")
  // badgeText="AVAILABLE"
  const [count, setCount] = React.useState()
  function addCount(){
    setCount(prevCount => prevCount + 1)
  }
    return(
        <div data-aos ='fade-up'
        data-aos-duration ='1500'>
            <h1 className='text-center'>PLACE YOUR ORDER NOW!!!</h1>
        <div className='card-group'>
            <div className='card border-dark'>
                <img src={pyam} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>POUNDED-YAM</h3>
                    <p className='card-text text-center'>Melon-soup</p>
                  <span>#4,000 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>
            <div className='card border-dark'>
                <img src={jollof} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>JOLLOF-RICE</h3>
                    <p className='card-text text-center'>Chicken</p>
                  <span>#3,500 <input type="number" id='input'/><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>
            <div className='card border-dark'>
                <img src={eba} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>EBA</h3>
                    <p className='card-text text-center'>Vegetable</p>
                  <span>#3,000 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>
           
            <div className='card border-dark'>
                <img src={wheat} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>WHEAT</h3>
                    <p className='card-text text-center'>Vegetable</p>
                  <span>#2,500 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>
            
        </div>
        <div className='card-group'>
        <div className='card border-dark'>
                <img src={nkobi} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>NKOBI</h3>
                    <p className='card-text text-center'>nkobi</p>
                  <span>#2,000 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>
            <div className='card border-dark'>
                <img src={spag} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>SPAGHETTI</h3>
                    <p className='card-text text-center'>Chicken</p>
                  <span>#3,000 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div> 
            <div className='card border-dark'>
                <img src={rbeans} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>RICE, BEANS AND DODO</h3>
                    <p className='card-text text-center'>Beef</p>
                  <span>#3,500 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>
            <div className='card border-dark'>
                <img src={pizza} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>PIZZA</h3>
                    <p className='card-text text-center'>Pizza</p>
                  <span>#5,000 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>
            <div className='card-group'>
            <div className='card border-dark'>
                <img src={psoup} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>MEAT</h3>
                    <p className='card-text text-center'>Pepper-soup</p>
                  <span>#5,000 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>

            
            <div className='card border-dark'>
                <img src={frice} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>FRIED-RICE</h3>
                    <p className='card-text text-center'>Chicken</p>
                  <span>#5,000 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>
            <div className='card border-dark'>
                <img src={agonyin} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>EWA-AGONYIN</h3>
                    <p className='card-text text-center'>Plantain</p>
                  <span>#2,000 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>
            <div className='card border-dark'>
                <img src={catfish} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>CAT-FISH</h3>
                    <p className='card-text text-center'>Pepper-soup</p>
                  <span>#3,000 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>
            <div className='card-group'>
            <div className='card border-dark'>
                <img src={Paster} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>PASTER</h3>
                    <p className='card-text text-center'>Meat sauce</p>
                  <span>#4,500 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>
            <div className='card border-dark'>
                <img src={Burger} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>BURGER</h3>
                    <p className='card-text text-center'>Burger</p>
                  <span>#5,000 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>
            <div className='card border-dark'>
                <img src={Chickenchips} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>Chicken and chips</h3>
                    <p className='card-text text-center'>chicken & chips</p>
                  <span>#3,200 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>
            <div className='card border-dark'>
                <img src={Chickensoup} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>Chicken</h3>
                    <p className='card-text text-center'>Pepper-soup</p>
                  <span>#3,000 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>
            </div>
            <div className='card-group'>
            <div className='card border-dark'>
                <img src={Whiterice} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>White rice</h3>
                    <p className='card-text text-center'>Meat sauce</p>
                  <span>#2,500 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>
            <div className='card border-dark'>
                <img src={Spaghettibolog} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>SPAGHETTI</h3>
                    <p className='card-text text-center'>Spaghetti-bolognese</p>
                  <span>#4,000 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>
            <div className='card border-dark'>
                <img src={Spicychicken} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>CHICKEN</h3>
                    <p className='card-text text-center'>Spicy</p>
                  <span>#3,500 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>
            <div className='card border-dark'>
                <img src={poundokra} className="card-img-top" />
                <div className='card-body text-center'>
                    <h3 className='card- text-center'>POUNDED-YAM</h3>
                    <p className='card-text text-center'>Okra</p>
                  <span>#3,000 <input type="number" id='input' /><button className=' text-light'>+ADD</button></span>  
                </div>

            </div>
            </div>
            
        </div>
        </div>
        </div>
    )
}