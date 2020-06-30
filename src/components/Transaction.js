import React,{useContext} from 'react';
import {MyContext} from '../context/GloState';

export const Transaction = ({transaction}) => {
    const colCode=transaction.amount<0?'-':'+'
    const {removeTrans}=useContext(MyContext);

    return (
        <li className={transaction.amount<0?'minus':'plus'}>
            {transaction.text} <span>{colCode}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={()=>removeTrans(transaction.id)}>X</button>
        </li>
    )
}
