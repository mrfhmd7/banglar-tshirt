import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
     let message;
     if (cart.length === 0){
          message = <h4>Please add some products</h4>
          }
     else {
          message = <div>
               <h2>Boroloxx!!!</h2>
               <h3>Thanks for westing money!!</h3>
          </div>
     }
     return (
          <div>
               <h2 className={cart.length === 1
                    ? 'yellow'
                    : 'red'}>
                    Order summary: {cart.length}
               </h2>
               <p className={`bold border-radius ${cart.length === 3
                    ? 'orange'
                    : 'purple'}`}>
                    Something
               </p>
               {
                    cart.length > 2
                         ? <span className=''>Aro kin beta!!!</span>
                         : <span>Fokir sala</span>
               }
               {message}
               {
                    cart.map(tshirt => <p
                         key={tshirt._id}>
                         name: {tshirt.name}
                         <button className='btn' onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                    </p>)
               }
               {cart.length === 2 && <h2>Double Bonanza!!!!!</h2>}
               {cart.length ===3 || <h3>Tin ta to holo na.</h3>}
          </div>
     );
};

export default Cart;

/* 
*Conditional rendering
1. Use if else to set a variable that will contain a element, components
2. Ternary : condition ? 'for true' : 'false'
3. Logical (&&) : (if the condition is true then the next thing will be displayed)
4. Logical (||) : (if the condition is false then the next thing will be displayed)
*/

/*
 *Conditional CSS class
 * Use ternary operator
 * Ternary inside template string
*/