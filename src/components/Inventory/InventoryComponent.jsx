import { useState } from "react"
import { AddArticleComponent } from "./AddArticleComponent"
import { ArticleListComponent } from "./ArticleListComponent"
import '../Inventory/styles.scss'
import 'normalize.css';
import { HeaderComponent } from "../Header/HeaderComponent";
import { ModalComponent } from "../Modal/ModalComponent";

export const InventoryComponent = () => {
  const [articles, setArticles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    minStock: ""
  });

  const addArticle = (newArticle) => {
    if (newArticle.quantity > 99999999 || newArticle.minStock > 99999999) {
      alert("Excedes el limite máximo")
      return;
    }
    if (articles.find(article => article.name === newArticle.name && article)) {
      alert(`El elemento ${newArticle.name} ya existe en la tabla, puedes modificarlo o eliminarlo desde la tabla.`)
      return;
    }
    setArticles((prevArticles) => [...prevArticles, newArticle]);
  }

  const openModal2Edit = (article) => {
    setSelectedArticle({...article});
    setFormData({
      name: article.name || "",
      quantity: article.quantity !== undefined ? String(article.quantity) : "",
      minStock: article.minStock !== undefined ? String(article.minStock) : ""
    });
    setIsModalOpen(true);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const handleUpdate = () => {
    const updateArticles = articles.map((article) =>
      article.name === selectedArticle.name
      ? {
        ...article,
        name: formData.name,
        quantity: parseInt(formData.quantity),
        minStock: parseInt(formData.minStock)
      }
      : article
    );
    setArticles(updateArticles)
    closeModal();
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedArticle(null);
  }

  const deleteArticle = (index) => {
    const updated = articles.filter((_, i) => i !== index);
    setArticles(updated);
  }

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <main>
        <section className="inventory-panel">
          <h2 className="panel-title">Inventory Managment</h2>
          <p className="panel-subTitle">Control and manage your inventory items.</p>

          <AddArticleComponent addArticle={addArticle}></AddArticleComponent>
          <ArticleListComponent
            articles={articles}
            deleteArticle={deleteArticle}
            updateArticle={openModal2Edit}
          ></ArticleListComponent>
        </section>

        {isModalOpen && selectedArticle && (
        <ModalComponent onClose={closeModal}>
          <div className="modal-form">
            <h3>You Are Editing the Article: {selectedArticle?.name}</h3>

            <label htmlFor="name">Article Name</label>
            <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleInputChange}
            placeholder={selectedArticle.name}
            />

            <label htmlFor="name">Quantity</label>
            <input 
            type="number" 
            id="quantity" 
            name="quantity" 
            value={formData.quantity}
            onChange={handleInputChange}
            />

            <label htmlFor="minStock">Minimun Stock</label>
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
      )}
      </main>
    </>
  )
}
