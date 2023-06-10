import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
     const [money] = useContext(MoneyContext);
     return (
          <div>
               <h2>Sister</h2>
               <h5>Grandpa Money: {money}</h5>
          </div>
     );
};

export default Sister;