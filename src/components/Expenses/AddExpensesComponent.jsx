import { useRef, useState } from "react";
import '../Expenses/styles.scss'
import { ExpensesSummaryComponent } from "./ExpensesSummaryComponent";

export const AddExpensesComponent = ({ addExpense, expenses }) => {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    description: "",
    category: "",
    amount: "",
    date: today
  });

  const addBtn = useRef(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: type === "number" ? Number(value) : value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now() + Math.random(),
      description: formData.description,
      category: formData.category,
      amount: parseFloat(formData.amount),
      date: formData.date
    };


    addExpense(newExpense);

    setFormData({
      description: "",
      category: "",
      amount: "",
      date: today
    });
  };

  const handleKeyDown = (e) => {
    if (e.key == 'Enter') {
      addBtn.current.focus();
    }
  }


  return (
    <>
      <ExpensesSummaryComponent expenses={expenses}/>
      <form className="panel-add-expense" onSubmit={handleSubmit}>
        <div className="expense-expenses">
          <div className="expense-description">
            <p>Description</p>
            <input
              type="text"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Enter a description of the expense"
              required
            />
          </div>

          <div className="expense-category">
            <p>Category</p>
            <input
              type="text"
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Enter a category of the expense"
              required
            />
          </div>

          <div className="expense-amount">
            <p>Amount</p>
            <input
              type="number"
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Enter a amount of the expense"
              required
            />
          </div>

          <div className="expense-date">
            <p>Date</p>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              required
            />
          </div>
        </div>

        <button className="expenses-addBtn" type="submit" ref={addBtn}>+ Record Expense</button>
      </form>
    </>
  )
}
