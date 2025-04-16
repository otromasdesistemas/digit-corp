import { useState } from "react"
import { AddArticleComponent } from "./AddArticleComponent"
import { ArticleListComponent } from "./ArticleListComponent"
import '../Inventory/styles.scss'
import 'normalize.css';

export const InventoryComponent = () => {
  const [articles, setArticles] = useState([]);

  const addArticle = (newArticle) => {
    setArticles((prevArticles) => [...prevArticles, newArticle]);
  }

  const deleteArticle = (index) => {
    const updated = articles.filter((_, i) => i !== index);
    setArticles(updated);
  }

  return (
    <section className="inventory-panel">
      <h2 className="panel-title">Inventory Managment</h2>
      <p className="panel-subTitle">Control and manage your inventory items.</p>

      <AddArticleComponent addArticle={addArticle}></AddArticleComponent>
      <ArticleListComponent 
      articles={articles} 
      deleteArticle={deleteArticle}
      ></ArticleListComponent>
    </section>
  )
}
