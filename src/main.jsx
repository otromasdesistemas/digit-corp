import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { InventoryComponent } from './components/Inventory/InventoryComponent'
import { HeaderComponent } from './components/Header/HeaderComponent'
import { SalesPanelComponent } from './components/Sales/SalesPanelComponent';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={""}></Route>
        <Route path='/inventory' element={<InventoryComponent />}></Route>
        <Route path='/sales' element={<SalesPanelComponent />}></Route>
      </Routes>
    </Router>
  </StrictMode>
)
