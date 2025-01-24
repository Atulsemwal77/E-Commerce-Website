import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";


const products = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: 100,
    imageClass: "img9",
    image: "New folder/71RdoeXxtrL 1.png",
    rating: 3.5,
    reviews: 35,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: 100,
    // imageClass: "img10",
    image: "New folder/eos-250d-03-500x500\ 1.png",
    rating: 3.5,
    reviews: 35,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    // imageClass: "img9",
    image :"/New folder/ideapad-gaming-3i-01-500x500 1.png",
    rating: 5,
    reviews: 32,
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: 500,
    // imageClass: "img9",
    image : "New folder/Cart.png",
    rating: 4.5,
    reviews: 35,
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: 960,
    // imageClass: "img9",
    image:"New folder/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png",
    rating: 5,
    reviews: 65,
    colorOptions: ["red", "brown"],
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    // imageClass: "img9",
    image : "New folder/Copa_Sense 1.png",
    rating: 5,
    reviews: 35,
    colorOptions: ["yellow", "red"],
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    // imageClass: "img9",
    image: "New folder/GP11_PRD3 1.png",
    rating: 4,
    reviews: 55,
    colorOptions: ["black", "red"],
  },
  {
    id: 8,
    name: "Quilted Stain Jacket",
    price: 660,
    // imageClass: "img9",
    image: "New folder/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png",

    rating: 4,
    reviews: 55,
    colorOptions: ["black", "red"],
  },
];

    const Cont6 = () => {
        const { addToCart } = useCart();
        const navigate = useNavigate();
      
        return (
          <div className="container my-5">
            <h2 className="fw-bold text-danger p-1">Our Products</h2>
            <div className="row mt-5">
              {products.map((product) => (
                <div key={product.id}
                className="col-md-6 col-sm-6 col-lg-3 mb-3"
                >
                  <div className="product-card">
                    <div className="product">
                      <div className="text-end me-1">
                        <i className="bi bi-heart me-2"></i>
                        <br />
                        <i className="bi bi-eye me-2"></i>
                        {/* <div className={product.imageClass}></div> */}
                        <img src={product.image} style={{width:"100px",height:"90px" ,position: "absolute",top: "25%",left: "25%"}}></img>
                
                      
                        <button className="btn-sm w-100 btn2"onClick={() => addToCart(product)} >Add To Cart</button>
                      </div>
                    </div>
                    <h5 className="mt-2">{product.name}</h5>
                    <p className="text-danger">Price : ${product.price}</p>
                    <p >Reviews : <span className="text-warning "> {product.reviews}</span></p>
                    
                  </div>
                

            </div> 
              ))}
            </div>
        
      
            <div
              className="btn btn-danger mt-4 "
              onClick={() => navigate("/CartPage")}
            >
              Go to Cart
            </div>
          </div>
        );
      };
      
      export default Cont6;