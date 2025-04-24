import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { InventoryComponent } from './components/Inventory/InventoryComponent'
import { HeaderComponent } from './components/Header/HeaderComponent'
import { SalesPanelComponent } from './components/Sales/SalesPanelComponent';
import { OverviewPanelComponent } from './components/Overview/OverviewPanelComponent';
import { ExpensesPanelComponent } from './components/Expenses/ExpensesPanelComponent';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/overview" replace />} />
        <Route path='/overview' element={<OverviewPanelComponent />}></Route>
        <Route path='/inventory' element={<InventoryComponent />}></Route>
        <Route path='/sales' element={<SalesPanelComponent />}></Route>
        <Route path='/expenses' element={<ExpensesPanelComponent />}></Route>
      </Routes>
    </Router>
  </StrictMode>
)
