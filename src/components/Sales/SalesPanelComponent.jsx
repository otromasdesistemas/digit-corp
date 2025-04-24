import { useState } from "react";
import { HeaderComponent } from "../Header/HeaderComponent"
import { CrudPanelComponent } from "../shared/CrudPanel/CrudPanelComponent"
import { ModalComponent } from "../shared/Modal/ModalComponent";
import { AddSalesComponent } from "./AddSalesComponent";
import { SaleListComponent } from "./SaleListComponent";
import '../Sales/styles.scss'
import 'normalize.css';

export const SalesPanelComponent = () => {
  const [sales, setSales] = useState([]);

  const renderForm = ({ addItem }) => (
    <AddSalesComponent
      addSale={(newSale) => {
        addItem(newSale);
      }}
      sales={sales}
    />
  );

  const renderTable = ({ items, deleteItem, updateItem }) => (
    <SaleListComponent
      sales={items}
      deleteSale={deleteItem}
      updateSale={updateItem}
    />
  );

  const renderModal = ({ selectedItem, formData, handleInputChange, handleUpdate, closeModal }) => (
    <ModalComponent onClose={closeModal}>
      <div className="modal-form">
        <h3>Your are Editing The Sale: {selectedItem?.clientName}</h3>

        <label htmlFor="client-name">Client Name</label>
        <input type="text"
          id="client-name"
          name="clientName"
          value={formData.clientName}
          onChange={handleInputChange}
          placeholder={selectedItem?.clientName}
        />

        <label htmlFor="product">Product</label>
        <input type="text"
          id="product"
          name="product"
          value={formData.product}
          onChange={handleInputChange}
        />

        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
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

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />

        <button onClick={handleUpdate}>Save Changes</button>
      </div>
    </ModalComponent>
  )

  return (
    <>
      <HeaderComponent />
      <main>
        <CrudPanelComponent
          title="Sales Managment"
          subtitle="Registrate and control your sales."
          formComponent={renderForm}
          tableComponent={renderTable}
          modalFormComponent={renderModal}
          initialData={sales}
          onUpdate={setSales}
          getItemKey={(item) => item.clientName}
        />
      </main>
    </>
  )
}
