import React from "react";
import { useCart } from './hm/CartContext'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import one from "../assets/products/productOne.png"
import two from "../assets/products/eos-250d-03-500x500 1.png"
import laptop from "../assets/products/ideapad-gaming-3i-01-500x500 1.png"
import cart from '../assets/products/creame.png'
import car from "../assets/products/car.png"
import soccer from '../assets/products/Copa_Sense 1.png'
import game from '../assets/products/GP11_PRD3 1.png'
import jacket from '../assets/products/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png'
import gamepad from '../assets/products/g92-2-500x500 1.png'
import monitor from '../assets/products/g27cq4-500x500 1.png'
import keyboard from '../assets/products/ak-900-01-500x500 1.png'
import chair from '../assets/products/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png'
import bag from '../assets/products/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png'
import coat from '../assets/products/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png'
import bookself from '../assets/products/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png'
import cpu from '../assets/products/gammaxx-l240-argb-1-500x500 1.png'
import headphon from '../assets/products/download.jpeg'
import mackbook from '../assets/products/download (1).jpeg'
import s23 from '../assets/products/download (2).jpeg'
import speaker from '../assets/products/download (4).jpeg'
import watch from '../assets/products/download (3).jpeg'
import cam from '../assets/products/download (5).jpeg'
import blt from '../assets/products/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png'


const products = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: 100,
    // image: one,
    image : one
    
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: 100,
    image: two,
    
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    // imageClass: "img9",
    image: laptop
    
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: 500,
    // imageClass: "img9",
    image: cart,
    
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: 960,
    // imageClass: "img9",
    image:car,
    
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    // imageClass: "img9",
    image: soccer

  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    // imageClass: "img9",
    image: game,
    
  },
  {
    id: 8,
    name: "Quilted Stain Jacket",
    price: 660,
    // imageClass: "img9",
    image: jacket
  },
  {
    id: 9,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    image : gamepad
  },
  {
    id: 10,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    image: monitor
  },
  {
    id: 11,
    name: "Ak-900 Wired Keyboard",
    price: 960,
    image: keyboard
    
  },
  {
    id: 12,
    name: "S-Series Comfort Chair",
    price: 375,
    image:chair
},
{
  id: 13,
  name: 'Gucci Duffle Bag',
  price: 960,
  image:bag,
  
},
{
  id: 14,
  name: 'The North Coat',
  price: 260,
  image:coat
  
},
{
  id: 15,
  name: 'Small BookSelf',
  price: 360,
  image: bookself
  },
{
  id: 16,
  name: 'RGB liquid CPU Cooler',
  price: 260,
  image: cpu,
  },
  {
    id: 17,
    name: 'Sony WH-1000XM4 Headphones',
    price: 350,
    image: headphon
  },
  {
    id: 18,
    name: 'Apple MacBook Pro',
    price: 1999,
    image: mackbook,
  },
  {
    id: 19,
    name: 'Samsung Galaxy S23',
    price: 1199,
    image: s23,
  },
  {
    id: 20,
    name: 'Speaker',
    price: 150,
    image: speaker,
  },
  {
    id: 21,
    name: 'Rolex Submariner Watch',
    price: 10999,
    image: watch,
  },
  {
    id: 22,
    name: 'Canon EOS R5 Camera',
    price: 3899,
    image: cam,
  },
  {
    id: 23,
    name: 'Bose SoundLink Bluetooth Speaker',
    price: 299,
    image: blt,
  },

];



const Allproduct = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  return (
    <>
    <div className="container my-5">
      <Link to =  "/"><div class="btn btn-outline-danger"> Back to Home </div>   </Link>
      <center><h2 className="fw-bold text-danger p-1">All Products</h2></center>
      <div className="row mt-5">
        {products.map((product) => (
          <div key={product.id} className="col-md-6 col-sm-6 col-lg-3 mb-3">
            <div className="product-card">
              <div className="product">
                <img
                  src={product.image}
                  style={{
                    width: "100px",
                    height: "90px",
                    position: "absolute",
                    top: "25%",
                    left: "25%",
                  }}
                ></img>

                <button
                  className="btn-sm w-100 btn2"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button> 
              </div>
            </div>
            <h5 className="mt-2">{product.name}</h5>
            <p className="text-danger">Price : ${product.price}</p>
            
          </div>
        ))}
      </div>

      
      
    </div>
    <center>
      <div className="btn btn-danger mt-4 "
            onClick={() => navigate("/Cart")}>
            Go to Cart
      </div>
    </center>
    </>
  );
};

export default Allproduct;
