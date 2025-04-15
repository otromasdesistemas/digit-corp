import { useState } from "react";

export const AddArticleComponent = ({ addArticle }) => {
    const [formData, setFormData] = useState({
        name: "",
        quantity: null,
        minStock: null,
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: type === "number" ? Number(value) : value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addArticle(formData); // Pasan los datos del formulario al componente padre
        setFormData({name: "", quantity: null, minStock: null}) // Limpieza del formulario después de enviar
    }

    return (
        <>
            <form className="panel-add-article" onSubmit={handleSubmit}>
                <div className="article-name">
                    <p>Article Name</p>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter the name of the article"
                    />
                </div>

                <div className="article-quantity">
                    <p>Quantity</p>
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Enter the Quantity"
                    />
                </div>

                <div className="article-min-stock">
                    <p>Minimum Stock</p>
                    <input
                        type="number"
                        name="minStock"
                        value={formData.minStock}
                        placeholder="Enter the minimum stock"
                        onChange={handleChange}
                    />
                </div>
                <button className="article-addBtn" type="submit">+ Add Article</button>
            </form>

        </>
    )
}
