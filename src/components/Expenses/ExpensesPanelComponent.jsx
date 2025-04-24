import { useState } from "react";
import { HeaderComponent } from "../Header/HeaderComponent"
import { CrudPanelComponent } from "../shared/CrudPanel/CrudPanelComponent"
import { ModalComponent } from "../shared/Modal/ModalComponent";
import { ExpenseListComponent } from "./ExpenseListComponent";
import { AddExpensesComponent } from "./AddExpensesComponent";
import '../Expenses/styles.scss'
import 'normalize.css';
import { ExpensesSummaryComponent } from "./ExpensesSummaryComponent";

export const ExpensesPanelComponent = () => {
    const [expenses, setExpenses] = useState([]);

    const renderForm = ({ addItem }) => (
        <AddExpensesComponent
            addExpense={(newExpense) => {
                addItem(newExpense);
            }}
            expenses = {expenses}
        />
    );

    const renderTable = ({ items, deleteItem, updateItem }) => (
        <ExpenseListComponent
            expenses={items}
            deleteExpense={deleteItem}
            updateExpense={updateItem}
        />
    );

    const renderModal = ({ selectedItem, formData, handleInputChange, handleUpdate, closeModal }) => (
        <ModalComponent onClose={closeModal}>
            <div className="modal-form">
                <h3>Your are Editing The Expense: {selectedItem?.description}</h3>

                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                />

                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />

                <label htmlFor="category">Category</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                />

                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                />

                <button onClick={handleUpdate}>Save Changes</button>
            </div>

        </ModalComponent>
    )

    return (
        <>
            <HeaderComponent/>
            <main>
                <CrudPanelComponent
                    title="Expense Management"
                    subtitle="Record and control your expenses."
                    formComponent={renderForm}
                    tableComponent={renderTable}
                    modalFormComponent={renderModal}
                    initialData={expenses}
                    onUpdate={setExpenses}
                    getItemKey={(item) => item.description}

                />
            </main>
        </>
    )
}
