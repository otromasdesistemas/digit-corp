import { useEffect, useState } from "react";

export const CrudPanelComponent = ({
    title,
    subtitle,
    formComponent,
    tableComponent,
    modalFormComponent,
    initialData = [],
    getItemKey = (item) => item.name,
    fields = ['name', 'quantity', 'minStock'],
}) => {
    const [items, setItems] = useState(initialData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null)
    const [formData, setFormData] = useState({});

    const addItem = (newItem) => {
        if (items.find(item => getItemKey(item) === getItemKey(newItem))) {
            alert(`El item: ${newItem.clientName !== undefined ? newItem.clientName : newItem.name} ya existe!`);
            return;
        }
        setItems((prev) => [...prev, newItem]);
    };

    const openModal2Edit = (item) => {
        setSelectedItem(item);
        const initialFormData = {};
        Object.keys(item).forEach(key => {
            initialFormData[key] = typeof item[key] == 'number'
                ? String(item[key])
                : item[key] || "";
        });
        setFormData(initialFormData);
        setIsModalOpen(true);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleUpdate = () => {
        const updatedItems = items.map((item) => {
            if (getItemKey(item) === getItemKey(selectedItem)) {
                const updatedFields = {};

                // Convert to num fields
                Object.keys(formData).forEach((key) => {
                    if (typeof item[key] === 'number') {
                        updatedFields[key] = formData[key] ? Number(formData[key]) : item[key];
                    } else {
                        updatedFields[key] = formData[key];
                    }
                });

                return {
                    ...item,
                    ...updatedFields
                };
            }
            return item;
        });

        setItems(updatedItems)
        closeModal();
    };

    const deleteItem = (index) => {
        const updated = items.filter((_, i) => i !== index);
        setItems(updated);
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedItem(null);
    }

    return (
        <section className="modal-panel">
            <h2 className="panel-title">{title}</h2>
            <p className="panel-subTitle">{subtitle}</p>

            {formComponent({ addItem })}
            {tableComponent({
                items,
                deleteItem,
                updateItem: openModal2Edit
            })}

            {isModalOpen && selectedItem && modalFormComponent({
                selectedItem,
                formData,
                handleInputChange,
                handleUpdate,
                closeModal
            })}
        </section>
    );
};
