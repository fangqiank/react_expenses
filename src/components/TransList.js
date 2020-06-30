import React,{useContext} from 'react';
import {Transaction} from './Transaction';

import {MyContext} from '../context/GloState';


export const TransList = () => {
    const {transactions}=useContext(MyContext);

    return (
        <div>
           <h3>History</h3>
           <ul id="list" className="list">
               {transactions.map(trans=>(<Transaction key={trans.id} transaction={trans} />))}
               
           </ul> 
        </div>
    )
}
