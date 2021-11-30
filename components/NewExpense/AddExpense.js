import React, { useState } from "react";
import './AddExpense.css';
import ExpenseForm from "./ExpenseForm";

const AddExpense = (props) => {

    const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);

    const addNewExpenseHandler = (event) => {
        setShowAddExpenseForm(true);
    };

    const saveExpenseHandler = (newExpense) => {
        props.onAddNewExpense(newExpense);
        setShowAddExpenseForm(false);
    };

    const cancelHandler = () => {
        setShowAddExpenseForm(false);
    };
    

    let addNewExpenseButton = <div className="center-aligned"><button onClick={addNewExpenseHandler}>Add New Expense</button></div>;
    let addNewExpenseForm = <ExpenseForm onCancelClick={cancelHandler} onSaveExpense={saveExpenseHandler}></ExpenseForm>;



    return showAddExpenseForm ? addNewExpenseForm : addNewExpenseButton;
}

export default AddExpense;