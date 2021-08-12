import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon';
import Logo from '../../assets/stamp_logga2.png';
import './header-main.styles.scss';



const HeaderMain =() => {

  const [isMobile, setIsMobile] =useState(false);
  return (

    
        <nav className="navbarMain">
             
          <div classname="logoMain">
            <Link to="/">
              <div className="navImageMain">
            <img src={Logo} alt="shallow crafts"></img>
            </div>
            </Link>
            </div>
          <ul className={isMobile? "nav-links-mobile-main" : "nav-links-main"}
          onClick={() => setIsMobile(false)}
          >

<Link to="single-product" className="shopMain">
  <li>Shop</li>
</Link>
<Link to="about" className="aboutMain">
  <li>Om Oss</li>
</Link>
<Link to="mailer" className="mailerMain">
  <li>Kontakt</li>
</Link>
<Link to="minimal" className="minimalMain">
  <li>Minimal Waste</li>
</Link>


          </ul>
          <CartIcon />
          <button className="mobile-menu-icon-main"
          onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </button>
        
        </nav>
      
  )
}
    


export default HeaderMain;