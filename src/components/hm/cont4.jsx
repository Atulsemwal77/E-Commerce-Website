import React from 'react';
import bag from '../../assets/products/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png'
import coat from '../../assets/products/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png'
import bookself from '../../assets/products/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png'
import cpu from '../../assets/products/gammaxx-l240-argb-1-500x500 1.png'



const ProductList =()=>{



const products = [
  {
    id: 1,
    name: 'Gucci Duffle Bag',
    price: 960,
    oldPrice: 1160,
    rating: 4.5,
    image: bag,
  },
  {
    id: 2,
    name: 'The North Coat',
    price: 260,
    oldPrice: 360,
    rating: 5,
    image: coat,
  },
  {
    id: 3,
    name: 'Small BookSelf',
    price: 360,
    oldPrice: null,
    rating: 5,
    image: bookself,
  },
  {
    id: 4,
    name: 'RGB liquid CPU Cooler',
    price: 260,
    oldPrice: 160,
    rating: 4.5,
    image:cpu,
  },
];
return (
  <>
  <div class="container my-5">
              <h2 class="fw-bold text-danger p-1" style={{borderLeft:" 5px solid rgb(248, 54, 15)  "}}>This Month</h2>
             <div class="d-flex text-center">
                 <h3><span class=" me-3 text-center ">Best Selling Products</span></h3>
              </div>
  <div className="row mt-4">
      {products.map((product) => (
        <div key={product.id} className="col-sm-6 col-md-6 col-lg-3">
          <div className="product-card">
            <div className="product">
              {/* <div className="text">
                {/* <span className="text1">{product.discount}</span> */}
                {/* <div className="text-end me-1">
                  <i className="bi bi-heart me-2"></i>
                  <i className="bi bi-eye me-2"></i>
                </div> */}
              
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
              
                
              
              {/* <button className=" btn-sm w-100 btn1">Add To Cart</button> */}
            </div>
            <h5 className="mt-2">{product.name}</h5>
            <p className="text-danger">
              ${product.price}
              <del className="text-muted">${product.oldPrice}</del>
            </p>
            <p className="text-dark">
              Rating : {product.rating} 
              
            </p>
          </div>
        </div>
      ))}
      </div>
    </div>
    </>  
    )
}
 
  

export default ProductList;