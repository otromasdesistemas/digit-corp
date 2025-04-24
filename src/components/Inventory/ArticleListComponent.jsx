import '../Inventory/styles.scss'

export const ArticleListComponent = ({
    articles = [], 
    updateArticle, 
    deleteArticle
}) => {

    return (
        <article className="list-article">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Minimum Stock</th>
                        <th>State</th>
                        <th>Modify / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article, index) => (
                        <tr key={index}>
                            <td>{article.name}</td>
                            <td>{article.quantity}</td>
                            <td>{article.minStock}</td>
                            <td className='list-stock'>{article.quantity >= article.minStock ? <button className="article-inStock">In Stock</button> : <button className="article-lowStock">Low Stock</button>}</td>
                            <td className='list-options'>
                                <button onClick={() => updateArticle(article)}>📝</button>
                                <button onClick={() => deleteArticle(article.id)}>❌</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </article>
    )
}
