// import { useLocation,  } from "react-router-dom";

// const Page2 = () => {
//   const location = useLocation();
//   const { products } = location.state || {}; // Retrieving the products array

//   return (
//     <div>
//       <h1>Page 2</h1>
//       <h2>Product List:</h2>
//       <ul>
//         {products?.map((product, index) => (
//           <li key={index}>
//             {product.name} - ${product.price} <br/>
        
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Page2;


import { useCart } from "./hm/CartContext";
import cash from '../assets/products/Frame 834.png'
// const items = [
//   {
//     id: 1,
//     name: "LCD Monitor",
//     image: "New folder/g27cq4-500x500 1.png",
//     price: 650,
//   },
//   {
//     id: 2,
//     name: "LCD Monitor",
//     image: "New folder/g92-2-500x500 1.png",
//     price: 1150,
//   },
// ];


const BillingDetails = () => {
  const { cart } = useCart();
  const handleClick = () => {
    alert('Thanks for Shopping')};
  return (
    <div className="container mt-3">
      <h2>Billing Details</h2>
      <div className="row">
        {/* Billing Form */}
        <div className="col-lg-6">
          <form className="row g-3 d-inline">
            {renderInputField("First Name", "text", true)}
            {renderInputField("Company Name", "text", false)}
            {renderInputField("Street Address", "text", true)}
            {renderInputField("Apartment, Floor etc (optional)", "text", false)}
            {renderInputField("Town/City", "text", true)}
            {renderInputField("Phone Number", "text", true)}
            {renderInputField("Email Address", "email", true)}

            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="saveInfoCheckbox"
                />
                <label className="form-check-label" htmlFor="saveInfoCheckbox">
                  Save this information for faster check-out next time
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="col-lg-6 my-5">
            {cart.length > 0 ? (
               <span>{cart.map((product) => (
            <div key={product.id} className="d-flex justify-content-evenly mb-1">
              <p style={{ width: "250px" , fontSize:"2vh" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "40px" }}
                />
                &nbsp; {product.name}
              </p>
              <p style={{ width: "100px" }}>${product.price}</p>
            </div>
          ))} </span>
          
        ) : (
          <p className="box">Your cart is empty.</p>
        )}

          {/* {items.map((item) => (
            <div key={item.id} className="d-flex justify-content-evenly mb-5">
              <p style={{ width: "200px" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "50px" }}
                />
                &nbsp; {item.name}
              </p>
              <p style={{ width: "100px" }}>${item.price}</p>
            </div>
          ))} */}

          <div className="d-flex justify-content-evenly mb-2 border-bottom">
            <p style={{ width: "200px" }}>Subtotal</p>
            <p style={{ width: "100px" }}>${cart.reduce((total, product) => total + product.price, 0)} </p>
          </div>
          <div className="d-flex justify-content-evenly mb-2 border-bottom">
            <p style={{ width: "200px" }}>Shipping</p>
            <p style={{ width: "100px" }}>free</p>
          </div>
          <div className="d-flex justify-content-evenly mb-2">
            <p style={{ width: "200px" }}>Total</p>
            <p style={{ width: "100px" }}>${cart.reduce((total, product) => total + product.price, 0)}</p>
          </div>

          {/* Payment Methods */}
          <div className="aca my-3" style={{ marginLeft: "13%" }}>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="bankTransfer"
              />
              <label className="form-check-label" htmlFor="bankTransfer">
                Bank &nbsp;
                <img
                  src={cash}
                  alt=""
                  height="18px"
                  className="img-fluid mx-3"
                />
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="cashOnDelivery"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="cashOnDelivery">
                Cash on delivery
              </label>
            </div>

            {/* Coupon Code */}
            <div className="col-md-12 mb-2">
              <input
                className="p-1 mb-3"
                type="text"
                placeholder="Coupon Code"
              />
              <button className="btn btn-danger mx-2" type="button">
                Apply Coupon
              </button>
            </div>

            {/* Place Order Button */}
            <div className="text-center">
              <button className="btn btn-danger mx-2" onClick={handleClick} >Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderInputField = (label, type, required) => (
  <div className="col-md-8 col-lg-10">
    <label htmlFor={label} className="form-label">
      {label} {required && <span style={{ color: "red" }}>*</span>}
    </label>
    <input
      type={type}
      className="form-control"
      style={{ backgroundColor: "whitesmoke" }}
      id={label.replace(/\s+/g, "").toLowerCase()}
      required={required}
    />
  </div>
);

export default BillingDetails;

