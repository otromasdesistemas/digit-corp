import { useState } from "react"
import { AddArticleComponent } from "./AddArticleComponent"
import { ArticleListComponent } from "./ArticleListComponent"

export const InventoryComponent = () => {
    const [articles, setArticles] = useState([]);

    const addArticle = (newArticle) => {
        setArticles((prevArticles) => [...prevArticles, newArticle])
    }
  return (
    <section className="inventory-panel">
        <h2>Inventory Managment</h2>
        <p>Control and manage your inventory items.</p>

        <AddArticleComponent addArticle={addArticle}></AddArticleComponent>
        <ArticleListComponent articles={articles}></ArticleListComponent>
    </section>
  )
}
