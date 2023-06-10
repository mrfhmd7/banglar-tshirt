import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ ring }) => {
     const goldenRing = useContext(RingContext);
     return (
          <div>
               <h2>Someone</h2>
               <p>Ring: {ring}</p>
               <p>Ring: {goldenRing}</p>
          </div>
     );
};

export default Special;