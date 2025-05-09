import { useRef, useState } from "react"

export const AddSalesComponent = ({ addSale }) => {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    clientName: "",
    product: "",
    quantity: "",
    amount: "",
    date: today
  })

  const addBtn = useRef(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData(prevData => ({
        ...prevData,
        [name]: type === "number" ? Number(value) : value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSale = ({
      clientName: formData.clientName,
      product: formData.product,
      quantity: parseInt(formData.quantity),
      amount: parseFloat(formData.amount),
      date: formData.date,
    });

    addSale(newSale);

    setFormData({
      clientName: "",
      product: "",
      quantity: "",
      amount: "",
      date: today
  })
  }

  const handleKeyDown = (e) => {
    if(e.key == 'Enter') {
        addBtn.current.focus();
    }
  }
  
    return (
    <>
        <form className="panel-add-sale" onSubmit={handleSubmit}>
            <div className="sale-sales">
                <div className="sale-clientName">
                    <p>Client Name</p>
                    <input 
                    type="text" 
                    name="clientName"
                    id="clientName"
                    value={formData.clientName}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter the name of the client"
                    required
                    />
                </div>

                <div className="sale-product">
                    <p>Product</p>
                    <input 
                    type="text" 
                    name="product"
                    id="product"
                    value={formData.product}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter the Product Name"
                    required
                    />
                </div>

                <div className="sale-quantity">
                    <p>Quantity</p>
                    <input 
                    type="number" 
                    name="quantity"
                    id="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter the Sales Quantity"
                    required
                    />
                </div>

                <div className="sale-amount">
                    <p>Amount</p>
                    <input 
                    type="number" 
                    name="amount"
                    id="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter the Mount"
                    required
                    />
                </div>

                <div className="sale-date">
                    <p>Date</p>
                    <input 
                    type="date" 
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter the Date"
                    required
                    />
                </div>
            </div>

            <button className="sales-addBtn" type="submit" ref={addBtn}>+ Record Sale</button>
        </form>
    </>
  )
}
