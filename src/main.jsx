import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { InventoryComponent } from './components/Inventory/InventoryComponent'
import { HeaderComponent } from './components/Header/HeaderComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={""}></Route>
        <Route path='/inventory' element={<InventoryComponent></InventoryComponent>}></Route>
      </Routes>
    </Router>
  </StrictMode>
)
