import React, {useState, useContext} from 'react'
import { ExpenseContext } from 'src/context/ExpenseState';

export const AddTransaction = () => {
    const [text, setText]=useState('');
    const [amount, setAmount]=useState();
    const {AddTransaction}=useContext(ExpenseContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random()*100000000),
            text,
            amount: +amount
        }

        AddTransaction(newTransaction);
    }
    return (
        <>
            <h3>Add new transaction</h3>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor='text'><strong>Text</strong></label>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                    </div>
                    <div>
                        <label htmlFor="amount"><strong>Amount</strong><br/>('+' for Income, '-' for Expenses)</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                    </div>
                    <button className="btn">Add transaction</button>
                </form>
        </>
    )
}