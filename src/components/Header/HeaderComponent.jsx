import { Link } from "react-router-dom";
import '../Header/styles.scss';

export const HeaderComponent = () => {
  return (
    <header>
        <h1>Financial Panel - DigitCorp</h1>
        <p>Monitor the performance and financial metrics of your business</p>

        <nav className="nav-list">
            <ul>
                <li><Link to={'/'}>Overview</Link></li>
                <li><Link to={'/inventory'}>Inventory</Link></li>
                <li><Link to={''}>Sales</Link></li>
                <li><Link to={''}>Expenses</Link></li>
                <li><Link to={''}>Customers</Link></li>
                <li><Link to={''}>Reports</Link></li>
                <li><Link to={''}>Configuration</Link></li>
            </ul>
        </nav>
    </header>
  )
}
