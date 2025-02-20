import React from "react";

const SearchItems = (props) => {
  const { results, onClose } = props

  return (
    <div className="modal show" style={{ display: "flex", marginTop: "100px" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title1">Search Results</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {results.length > 0 ? (
              results.map((item) => (
                <div key={item._id} className="col-md-12 mb-3">
                  <div className="card">
                    <img
                      src={`http://localhost:5000/uploads/${item.images[0]}`}
                      className="card-img-top"
                      alt={item.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found for your search.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItems;
