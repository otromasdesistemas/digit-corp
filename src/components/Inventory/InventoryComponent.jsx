import { useState } from "react"
import { AddArticleComponent } from "./AddArticleComponent"
import { ArticleListComponent } from "./ArticleListComponent"
import '../Inventory/styles.scss'
import 'normalize.css';
import { HeaderComponent } from "../Header/HeaderComponent";

export const InventoryComponent = () => {
  const [articles, setArticles] = useState([]);

  const addArticle = (newArticle) => {
    if (!newArticle.name || !newArticle.quantity || !newArticle.minStock) {
      alert("Debes completar todos los datos para agregar un articulo a la lista.")
      return;
    }
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

  // updateArticle = (articles) => {

  // }

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
          ></ArticleListComponent>
        </section>
      </main>
    </>
  )
}
