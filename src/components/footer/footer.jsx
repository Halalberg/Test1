import React from 'react';
import './footer.styles.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return (

    <footer className="footer-distributed">
            
      <div className="footer-right">

        <a href="https://www.facebook.com/shallowcraftsofficial/"><i className="fa fa-facebook"></i></a>
        <a href="https://www.instagram.com/shallowcrafts/"><i className="fa fa-instagram"></i></a>
        <a href="https://se.linkedin.com/in/kristina-hallberg-28540115b"><i className="fa fa-linkedin"></i></a>
      

      </div>

      <div className="footer-left">

        <p className="footer-links">
          <a class="link-1" href="#">Hem</a>

          <a href="shop">Shop</a>

          <a href="about">Om Oss</a>

          <a href="mailer">Kontakt</a>

          <a href="#">Prenumeration</a>

          <a href="minimal">Minimal Waste</a>

          <a href="terms">Villkor</a>

        </p>

        <p>Shallow Crafts &copy; 2021</p>
      </div>

    </footer>
  );
}

export default Footer;