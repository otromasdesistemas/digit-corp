import React from 'react'
import { formatCurrency } from '../../utils/formatter';

export const ExpenseListComponent = ({
    expenses = [],
    deleteExpense,
    updateExpense
}) => {
  return (
    <article className="list-expense">
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Modify / Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense, index) => (
                    <tr key={`${expense.id}-${index}`}>
                        <td>{expense.date}</td>
                        <td>{expense.description}</td>
                        <td><span className='category-span'>{expense.category}</span></td>
                        <td>{formatCurrency(expense.amount)}</td>
                        <td className='list-options'>
                            <button onClick={() => updateExpense(expense)}>📝</button>
                            <button onClick={() => deleteExpense(expense.id)}>❌</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </article>
  )
}
