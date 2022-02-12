import React, {createContext, useReducer}  from "react";
import AppReducer from './AppReducer';

const initialState={
    transactions: [
        {id:1, text:'Flower', amount:-20},
        {id:2, text:'Job', amount:20}
    ]
}

export const ExpenseContext = createContext(initialState);

export const GlobalProvider =({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function AddTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<ExpenseContext.Provider value ={{
        transactions: state.transactions, 
        deleteTransaction,
        AddTransaction
        }}>
            {children}
            </ExpenseContext.Provider>);
}