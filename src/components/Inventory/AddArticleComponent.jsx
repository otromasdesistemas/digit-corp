import { useRef, useState } from "react";
import '../Header/styles.scss'

export const AddArticleComponent = ({ addArticle }) => {
    const [formData, setFormData] = useState({
        name: "",
        quantity: "",
        minStock: "",
    });

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
        addArticle(formData);
        setFormData({ name: "", quantity: "", minStock: "" });
    }

    const handleKeyDown = (e) => {
        if(e.key == 'Enter') {
            addBtn.current.focus();
        }
    }

    return (
        <>
            <form className="panel-add-article" onSubmit={handleSubmit}>
                <div className="article-articles">
                    <div className="article-name">
                        <p>Article Name</p>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            placeholder="Enter the name of the article"
                            required
                        />
                    </div>

                    <div className="article-quantity">
                        <p>Quantity</p>
                        <input
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            placeholder="Enter the Quantity"
                            required
                        />
                    </div>

                    <div className="article-min-stock">
                        <p>Minimum Stock</p>
                        <input
                            type="number"
                            name="minStock"
                            value={formData.minStock}
                            onKeyDown={handleKeyDown}
                            placeholder="Enter the minimum stock"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <button className="article-addBtn" type="submit" ref={addBtn}>+ Add Article</button>
            </form>

        </>
    )
}
