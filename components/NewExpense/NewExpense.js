import React from 'react';
import './NewExpense.css';
import AddExpense from './AddExpense';

const NewExpense = (props) => {

    const saveExpenseHandler = (newExpense) => {
        const expense = {
            ...newExpense,
            id: Math.random().toString()
        };
        props.onAddExpense(expense)};

    return <div className="new-expense">
        {/* <ExpenseForm onSaveExpense={saveExpenseHandler} ></ExpenseForm> */}
        {<AddExpense onAddNewExpense={saveExpenseHandler} />}
        </div>

};

export default NewExpense;