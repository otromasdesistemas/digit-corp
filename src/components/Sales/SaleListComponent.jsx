import '../Sales/styles.scss'
import { formatCurrency } from '../../utils/formatter';

export const SaleListComponent = ({
    sales= [],
    deleteSale,
    updateSale
}) => {
    return (
        <article className="list-sale">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Client</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Mount</th>
                        <th>Modify / Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale, index) => (
                        <tr key={index}>
                            <td>{sale.date}</td>
                            <td>{sale.clientName}</td>
                            <td>{sale.product}</td>
                            <td>{sale.quantity}</td>
                            <td>{formatCurrency(sale.amount)}</td>
                            <td className='list-options'>
                                <button onClick={() => updateSale(sale)}>📝</button>
                                <button onClick={() => deleteSale(sale.id)}>❌</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </article>
    )
}
