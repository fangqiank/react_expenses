import React, { createContext,useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial state

const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
  );

const initialState = {
    // transactions:[
    //     // {id:1, text:'Flower',amount:-20},
    //     // {id:2, text:'Salary',amount:300},
    //     // {id:3, text:'Book',amount:-10},
    //     // {id:4, text:'Camera',amount:150}
    // ]
    transactions:localStorage.getItem('transactions') !== null ? localStorageTransactions : []
}

//create context
export const MyContext = createContext(initialState);

//Provider component
export const MyProvider=({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState);
    
    //Actions
    function removeTrans(id){
        dispatch({
            type:'DELETE_TRANACTION',
            payload:id
        })
    }

    function addTrans(trans){
        dispatch({
            type:'ADD_TRANACTION',
            payload:trans
        })
    }

    return (
        <MyContext.Provider value={{ 
            transactions:state.transactions,
            removeTrans,
            addTrans
        }}>
            {children}
        </MyContext.Provider>
    )
}
