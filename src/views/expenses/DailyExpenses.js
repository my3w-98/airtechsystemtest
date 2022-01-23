import React, {useContext} from "react";
import { ExpenseContext } from 'src/context/ExpenseState';

export const DailyExpenses = () =>{
    const {transactions} = useContext(ExpenseContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc,item) => (acc+=item), 0).toFixed(2);

    const income = amounts.filter(item => item>0).reduce((acc,item) => (acc+=item), 0).toFixed(2);
    const expense = (amounts.filter(item => item<0).reduce((acc,item) => (acc+=item), 0)*-1).toFixed(2);
    return (
        <>
                <h3>Your Balance</h3>
                <h1 id='balance'>Rs. {total}</h1>
                <div className="inc-exp-container">
                    <div>
                    <h4>Income</h4>
                    <p id="money-plus" className="money plus">{income}</p>
                    </div>
                    <div>
                    <h4>Expense</h4>
                    <p id="money-minus" className="money minus">{expense}</p>
                    </div>
                </div>
        </>
    )
}