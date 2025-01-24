import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from '../components/hm/CartContext';  // Assuming useCart also provides wishlist-related functionalities

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart ,  } = useCart(); // Destructure wishlist and functions from CartContext
  const navigate = useNavigate();
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-danger p-1">Your Wishlist <span style={{color:"black"}}>({wishlist.length})</span></h2>
      <div className="row mt-5">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <div key={product.id} className="col-md-6 col-sm-6 col-lg-3 mb-3">
              <div className="product-card">
                <div className="product">
                  <div className="text-end me-1">
                    {/* Remove from wishlist button */}
                    <i
                      className="bi bi-trash me-2"
                      onClick={() => removeFromWishlist(product.id)} // Function to remove from wishlist
                      style={{ cursor: "pointer" }}
                    ></i>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "100px",
                        height: "90px",
                        position: "absolute",
                        top: "25%",
                        left: "25%",
                      }}
                    />
                    {/* Add to cart button */}
                    <button
                      className="btn-sm w-100 btn2"
                      onClick={() => addToCart(product)} // Function to add to cart
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
                <h5 className="mt-2">{product.name}</h5>
                <p className="text-danger">Price: ${product.price}</p>
                <p>
                  Reviews: <span className="text-warning">{product.reviews}</span>
                </p>
              </div>
              
            </div>
            
          ))
        ) : (
          <center>
          <h4>Your wishlist is empty.<br></br>
          <div className="btn btn-danger mt-4 "
              onClick={() => navigate("/Allproduct")}>
              Products
            </div></h4> </center>
        )}
      </div>
      {wishlist.length > 0 ? (<center>
            <div className="btn btn-danger mt-4 "
              onClick={() => navigate("/Cart")}>
              Go to Cart
            </div></center>):([])}
    </div>

  );
};

export default Wishlist;
