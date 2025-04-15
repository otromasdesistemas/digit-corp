import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InventoryComponent } from './components/Inventory/InventoryComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InventoryComponent></InventoryComponent>
  </StrictMode>
)
