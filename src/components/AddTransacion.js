import React ,{useState,useContext} from 'react';
import {MyContext} from '../context/GloState';

export const AddTransacion = () => {
    const[text,setText]=useState('');
    const[amount,setAmount]=useState(0);
    const[kind,setKind]=useState(1);

    const localStorageTransactions = JSON.parse(
        localStorage.getItem('transactions')
      );
      
    let transactions =
    localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

    const {addTrans}=useContext(MyContext);

    const onSubmit=(e)=>{
        e.preventDefault();
        const newTrans={
            id: Math.floor(Math.random()*10000),
            text:text,
            amount:+kind === 1? +amount : -amount 
        }
        setText('')
        setAmount(0)
        addTrans(newTrans) 
        localStorage.setItem('transactions', JSON.stringify([newTrans,...transactions]));
    }

    const updateLocalStorage=()=> {
       localStorage.setItem('transactions', JSON.stringify(transactions));
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={onSubmit} >
                <div className="form-control">
                    <label htmlFor="Text">Text</label>
                    <input 
                     type="text" 
                     value={text} 
                     onChange={(e)=>setText(e.target.value)} 
                     placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <select name="kind" value={kind} onChange={e=>setKind(e.target.value)}>
                    　<option value="1">Income</option>
                      <option value="2">Expense</option>
                     </select>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input 
                     type="number" 
                     value={amount} 
                     onChange={(e)=>setAmount(e.target.value)} 
                     placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button> 
            </form>
        </div>
    )
}
