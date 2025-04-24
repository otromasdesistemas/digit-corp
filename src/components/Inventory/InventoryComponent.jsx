import { AddArticleComponent } from "./AddArticleComponent"
import { ArticleListComponent } from "./ArticleListComponent"
import { HeaderComponent } from "../Header/HeaderComponent";
import { ModalComponent } from "../shared/Modal/ModalComponent";
import '../Inventory/styles.scss'
import 'normalize.css';
import { CrudPanelComponent } from "../shared/CrudPanel/CrudPanelComponent";
import { useState } from "react";

export const InventoryComponent = () => {
  const [articles, setArticles] = useState([]);
  
  const renderForm = ({addItem}) => (
    <AddArticleComponent 
    addArticle={(newArticle) => {
      addItem(newArticle);
    }}/>
  );

  const renderTable = ({ items, deleteItem, updateItem }) => (
    <ArticleListComponent 
      articles={items}
      deleteArticle={deleteItem}
      updateArticle={updateItem}
    />
  );

  const renderModal = ({ selectedItem, formData, handleInputChange, handleUpdate, closeModal }) => (
    <ModalComponent onClose={closeModal}>
        <div className="modal-form">
          <h3>You are Editing The Article: {selectedItem?.name}</h3>

          <label htmlFor="name">Article Name</label>
          <input 
          type="text" 
          id="name"
          name="name"
          value={formData.name || ""}
          onChange={handleInputChange}
          placeholder={selectedItem?.name}
          />

          <label htmlFor="quantity">Quantity</label>
          <input 
          type="number" 
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          />


          <label htmlFor="minStock">Minimum Stock</label>
          <input 
          type="number" 
          id="minStock"
          name="minStock"
          value={formData.minStock}
          onChange={handleInputChange}
          />

          <button onClick={handleUpdate}>Save Changes</button>
        </div>
    </ModalComponent>
  )

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <main>
        <CrudPanelComponent 
          initialData={articles}
          title= "Inventory Managment"
          subtitle= "Control and manage your inventory items."
          formComponent ={renderForm}
          tableComponent = {renderTable}
          modalFormComponent = {renderModal}
          getItemKey = {(item) => item.name}
          onUpdate={setArticles}
        />
      </main>
    </>
  )
}
