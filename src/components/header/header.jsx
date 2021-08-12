import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon';
import Logo from '../../assets/stamp_logga2.png';
import './header.styles.scss';



const Header =() => {

  const [isMobile, setIsMobile] =useState(false);
  return (

    
        <nav className="navbar">
             
          <div classname="logo">
            <Link to="/">
              <div className="navImage">
            <img src={Logo} alt="shallow crafts"></img>
            </div>
            </Link>
            </div>
          <ul className={isMobile? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
          >

<Link to="single-product" className="shop">
  <li>Shop</li>
</Link>
<Link to="about" className="about">
  <li>Om Oss</li>
</Link>
<Link to="mailer" className="mailer">
  <li>Kontakt</li>
</Link>
<Link to="minimal" className="minimal">
  <li>Minimal Waste</li>
</Link>


          </ul>
          <CartIcon />
          <button className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </button>
        
        </nav>
      
  )
}
    


export default Header;