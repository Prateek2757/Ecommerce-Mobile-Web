import React, { useState } from "react";

const EditProductModal = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: product.title,
    description: product.description,
    price: product.price,
    instock: product.instock,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async() => {
    console.log("Saving Data:", formData); // Debugging: Log the form data
     await onSave(formData);
    onClose();
  };

  return (
    <div className="modal show" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Product</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-6">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="instock" className="form-label">
                  In Stock
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="instock"
                  name="instock"
                  value={formData.instock}
                  onChange={handleChange}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
