import React, {useState} from 'react';
import './hero.styles.scss';
import { Link } from 'react-router-dom';
import heroVideo from '../../assets/framsidanriktigt.mp4';

const Hero = () => {

    const [isMobile, setIsMobile] =useState(false);    
 

return (


 
      <div className="showcase">
             
      <div className='hero-container'>

          <video src={heroVideo} alt='Shallow Crafts' autoPlay loop muted/>
              
          <h1>SHALLOW CRAFTS</h1>
           <p>Kreativitet för dig och ditt hem</p>
    
  
           <Link to ='/single-product' className='hero-btns'> Shop </Link>

         

           </div>
        </div>
   



    )
}

export default Hero;