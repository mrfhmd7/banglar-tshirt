import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
     let message;
     if (cart.length === 0){
          message = <p>Please add some products</p>
          }
     else {
          message = <div>
               <h2>Boroloxx!!!</h2>
               <p>Thanks for westing money!!</p>
          </div>
     }
     return (
          <div>
               <h2>Order summary: {cart.length}</h2>
               {message}
               {
                    cart.map(tshirt => <p
                         key={tshirt._id}>
                         name: {tshirt.name}
                         <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                    </p>)
               }
          </div>
     );
};

export default Cart;

/* 
*Conditional rendering
1. use if else to set a variable that will contain a element, components
*/