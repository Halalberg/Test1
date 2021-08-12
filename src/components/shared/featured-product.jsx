import React, { useContext } from 'react';
import { isInCart } from '../../helpers';
import { CartContext } from '../../context/cart-context'; 
import { withRouter } from 'react-router-dom';
import './featured-product.styles.scss';

const FeaturedProduct = (props) => {
  const { title, imageUrl, price, history, id, description } = props;
  const product = { title, imageUrl, price, id,  description };
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const itemInCart = isInCart(product, cartItems);
  return (
    <div className='featured-product'>
      <div className='featured-image' onClick={() => history.push(`/product/${id}`)}>
      <img src={imageUrl} alt='product' />
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>{price} SEK</p>
        { 
          !itemInCart && 
          <button 
            className='button is-black nomad-btn'
            onClick={() => addProduct(product)}>
              Lägg till i kundvagn</button>
        }
        {
          itemInCart &&
          <button 
            className='button is-white nomad-btn'
            id='btn-white-outline'
            onClick={()=> increase(product)}>
              Lägg till fler</button>
        }
        
      </div>
    </div>
  );
}

export default withRouter(FeaturedProduct);