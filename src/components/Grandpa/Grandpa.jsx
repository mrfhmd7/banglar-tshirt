import React, { createContext, useState } from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
     const ring = 'Diamond 💍';
     const [money, setMoney] = useState(0);
     
     return (
          <div className='grandpa'>
               <h2>hi how </h2>
               <h2>Grandpa</h2>
               <h4>Has money: {money}</h4>
               <MoneyContext.Provider value={[money, setMoney]}>
                    <RingContext.Provider value='Golden Ring'>
                         <section className='flex'>
                              <Father ring={ring}></Father>
                              <Uncle></Uncle>
                              <Aunty ring={ring}></Aunty>
                         </section>
                    </RingContext.Provider>
               </MoneyContext.Provider>
          </div>
     );
};

export default Grandpa;

/* 
1. create context and export
2. create a provider and pass a value
3. use useContext to receive a value
* */