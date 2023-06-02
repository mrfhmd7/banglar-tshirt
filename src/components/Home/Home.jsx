import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import './Home.css'
import Cart from '../Cart/Cart';


const Home = () => {
     const tshirts = useLoaderData();
     // console.log(tshirts);

     const [cart, setCart] = useState([]);

     const handleAddToCart = tshirt => {
          const newCart = [...cart, tshirt]
          setCart(newCart);
     }

     const handleRemoveFromCart = id => {
          console.log(id);
     }

     return (
          <div className='home-container'>
               <div className='t-shirt-container'>
               {
                    tshirts.map(tshirt => <TShirt
                         key={tshirt._id}
                         tshirt={tshirt}
                         handleAddToCart={handleAddToCart}
                    ></TShirt>)
               }
               </div>
               <div className='cart-container'>
                    <Cart
                         cart={cart}
                         handleRemoveFromCart={handleRemoveFromCart}
                    ></Cart>
               </div>
          </div>
     );
};

export default Home;