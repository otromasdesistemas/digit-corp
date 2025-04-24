import { useEffect, useState } from 'react';
import '../Expenses/styles.scss'
import { formatCurrency } from '../../utils/formatter';

export const ExpensesSummaryComponent = ({ expenses = [] }) => {
    const [updatedExpenses, setUpdatedExpenses] = useState(expenses);
    const safeExpenses = expenses || [];

    const expensesByCategory = safeExpenses.reduce((acc, expense) => {
        if (!acc[expense.category]) {
            acc[expense.category] = [];
        }
        acc[expense.category].push(expense);
        return acc;
    }, {});

    const { total, categories } = expenses.reduce((acc, expense) => {
        acc.total += expense.amount;
        acc.categories[expense.category] = (acc.categories[expense.category] || 0) + expense.amount;
        return acc;
    }, { total: 0, categories: {} });

    useEffect(() => {
        setUpdatedExpenses(expenses);
    }, [expenses])

    return (
        <section className="expenses-summary">
            <h3>Expenses Summary</h3>
            {expenses.length === 0 ? (
                <p className='summary-noExpenses'>No expenses register.</p>
            ) : (
                <article className="summary-category">
                    <div className="category-all">
                        <p className='all-title'>Total Expenses</p>
                        <p className='all-amount'>{formatCurrency(total)}</p>
                    </div>
                    
                    {Object.entries(categories).map(([categoria, monto]) => (
                        <div className="category-item" key={categoria}>
                            <p className='item-title'>{categoria}</p>
                            <p className='item-amount'>{formatCurrency(monto)}</p>
                        </div>
                    ))}
                </article>
            )}
        </section>
    )
}
