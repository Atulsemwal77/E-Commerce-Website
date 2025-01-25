import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

import gamepad from '../../assets/products/g92-2-500x500 1.png'
import monitor from '../../assets/products/g27cq4-500x500 1.png'
import keyboard from '../../assets/products/ak-900-01-500x500 1.png'
import chair from '../../assets/products/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png'




const ProductList = () => {
  const navigate = useNavigate();
  const { addToWishlist } = useCart();

  // Product Data
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: "-40%",
      image: gamepad,
      rating: 5,
      reviews: 88,
    },
    {
      id: 2,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      discount: "-30%",
      image: monitor ,
    
      rating: 5,
      reviews: 99,
    },
    {
      id: 3,
      name: "Ak-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      image: keyboard, 
      rating: 4.5,
      reviews: 75,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      discount: "-25%",
      image: chair, 
      rating: 4.5,
      reviews: 99,

     


    },
  ];

  // //Generate star ratings
  //  const renderStars = (rating) => {
  //    const fullStars = Math.floor(rating);
  //    const halfStar = rating % 1 !== 0
  //    return (
  //      <>
  //        {Array(fullStars)
  //          .fill(null)
  //          .map((_, index) => (
  //            <i key={index} className="bi bi-star-fill"></i>
  //          ))}
  //        {halfStar && <i className="bi bi-star-half"></i>}
  //        {Array(5 - fullStars - (halfStar ? 1 : 0))
  //          .fill(null)
  //          .map((_, index) => (
  //            <i key={index} className="bi bi-star"></i>
  //          ))}
  //      </>
  //    );
  //  };

  return (
    
    <div class="container my-5">
        <h2 class="fw-bold text-danger p-1" style={{borderleft: "5px solid rgb(248, 54, 15)" , borderRadius:" 5px "}}>Today's </h2>
         <div class="d-flex text-center">
             <h3><span class=" me-3 text-center ">Flash Sales</span></h3>
             <div class="d-flex time ">
                 <span class="d-inline me-2" style={{lineHeight: "1px"}}><p>Day </p><h4>03 :</h4></span>
                 <span class="d-inline me-2" style={{lineHeight: "1px"}}><p>Hr</p><h4>23 :</h4></span>
                 <span class="d-inline me-2" style={{lineHeight: "1px"}}><p>Min</p><h4>19 :</h4></span>
                 <span class="d-inline"      style={{lineHeight: "1px"}}  > <p>Sec</p><h4>50</h4></span>
             </div>
         </div>
    <div className="row mt-4">
      {products.map((product) => (
        <div key={product.id} className="col-sm-6 col-md-6 col-lg-3">
          <div className="product-card">
            <div className="product">
              <div className="text">
                <span className="text1">{product.discount}</span>
                {/* <div className="text-end me-1 ">
                  <i className="bi bi-heart me-2 "style={{position: "absolute",top:"1%",left: "90%",cursor:"pointer"}}
                  onClick={() => addToWishlist(product)}></i>
                  
                </div> */}
              </div>
              <img src={product.image} style={{width:"100px",height:"90px" ,position: "absolute",top: "25%",left: "25%"}}></img>
              {/* <button className="btn1 btn-sm w-100 ">Add To Cart</button> */}
            </div>
            <h5 className="mt-2">{product.name}</h5>
            <p className="text-danger">
              ${product.price}{" "}
              <del className="text-muted">${product.oldPrice}</del>
            </p>
            <p className="text-warning">
              Rating : {product.rating} <br/>
              <span style={{ color: "black" }}>Reviews : ({product.reviews})</span> 
            </p>
          </div>
        </div>
      ))}
    </div>
    <div class="d-flex justify-content-center mt-4">
      <button class="btn btn-danger" onClick={() => navigate('/AllProduct')} style={{cursor: 'pointer'}}>
        View All Products</button>
    </div>
    </div>
  );
};

export default ProductList;



