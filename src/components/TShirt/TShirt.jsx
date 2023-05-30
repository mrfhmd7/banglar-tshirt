import React from 'react';
import Cart from '../Cart/Cart';

const TShirt = ({ tshirt }) => {
     const {picture, name, price} = tshirt;
     return (
          <div className='home-container'>
               <div className='t-shirt-container'>
                    <img src={picture} alt="" />
                    <h2>{name}</h2>
               </div>
               <div className='cart-container'>
                    <Cart></Cart>
               </div>
          </div>
     );
};

export default TShirt;