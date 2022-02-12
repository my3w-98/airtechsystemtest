import React from 'react';
import './_dailyexpenses.scss';
import { DailyExpenses } from './DailyExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import { GlobalProvider } from 'src/context/ExpenseState';

function Expenses() {
    return (
        <GlobalProvider>
            <h1>Daily Expenses Page</h1>
            <div className='Container'>
                <DailyExpenses/>
                <TransactionList/>
                <AddTransaction/>
            </div>
        </GlobalProvider>
    );
}

export default Expenses;