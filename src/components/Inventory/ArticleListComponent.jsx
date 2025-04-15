export const ArticleListComponent = ({ articles }) => {
    return (
        <article className="list-article">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Minimum Stock</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article, index) => (
                        <tr key={index}>
                            <td>{article.name}</td>
                            <td>{article.quantity}</td>
                            <td>{article.minStock}</td>
                            <td>{article.quantity >= article.minStock ? <p className="article-inStock">In Stock</p> : <p className="article-lowStock">Low Stock</p>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </article>
    )
}
