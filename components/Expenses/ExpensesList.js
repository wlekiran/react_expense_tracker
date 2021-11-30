import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    if (props.items.length === 0) return <p className="expenses-list__fallback">No Expense found.</p>;

    return (
        <ul className="expenses-list">
            {
                props.items.map((expense) => <ExpenseItem title={expense.title} key={expense.id} amount={expense.amount} date={expense.date} />)
            }
        </ul>
    );

}

export default ExpensesList;
