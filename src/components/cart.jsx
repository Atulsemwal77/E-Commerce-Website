// import React from "react";
// import { useCart } from './hm/CartContext';
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const { cart, handleDelete, setCart } = useCart();


//   const handleQuantityChange = (productId, newQuantity) => {
//     // Ensure newQuantity is a valid positive number
//     if (newQuantity <= 0 || isNaN(newQuantity)) return;
  
//     setCart((prevCart) =>
//       prevCart.map((product) =>
//         product.id === productId
//           ? { ...product, quantity: newQuantity } // Update the quantity for the matching product
//           : product // Keep other products unchanged
//       )
//     );
//   };
  

//   // Calculate the total price of all products in the cart
//   const getTotal = () => {
//     return cart.reduce((total, product) => total + product.price * product.quantity, 0);
//   };
  
  

//   return (
//     <>
//       <div className="table-responsive" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//         <h2 style={{ marginBottom: "20px" }}>Your Cart</h2>
      
//         {cart.length > 0 ? (
//           <table 

//             style={{
//               width: "100%",
//               borderCollapse: "collapse",
//               textAlign: "left",
//             }}
//           >
//             <thead>
//               <tr>
//                 <th
//                   style={{
//                     borderBottom: "1px solid #ccc",
//                     padding: "10px",
//                   }}
//                 >
//                   Product
//                 </th>
//                 <th
//                   style={{
//                     borderBottom: "1px solid #ccc",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   Price
//                 </th>
//                 <th
//                   style={{
//                     borderBottom: "1px solid #ccc",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   Quantity
//                 </th>
//                 <th
//                   style={{
//                     borderBottom: "1px solid #ccc",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   Subtotal
//                 </th>
//                 <th
//                   style={{
//                     borderBottom: "1px solid #ccc",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   Delete
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map((product) => (
//                 <tr key={product.id}>
//                   <td style={{ padding: "10px" }}>
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       style={{ width: "50px", verticalAlign: "middle" }}
//                     />
//                     &nbsp; {product.name}
//                   </td>
//                   <td style={{ padding: "10px", textAlign: "center" }}>
//                     ${product.price}
//                   </td>
//                   <td style={{ padding: "10px", textAlign: "center" }}>
//                     <input
//                       type="number"
//                       min="1"
                  
//                       onChange={(e) => {
//                       const newQuantity = parseInt(e.target.value, 10); // Parse the input as a base-10 integer
//                       if (!isNaN(newQuantity)) {
//                       handleQuantityChange(product.id, newQuantity);
//                       }
//                       }}

//                       style={{
//                         width: "60px",
//                         textAlign: "center",
//                         border: "1px solid #ccc",
//                         borderRadius: "4px",
//                       }}
//                     />
//                   </td>
//                   <td style={{ padding: "10px", textAlign: "center" }}>
//                     ${product.price * product.quantity}
                  
//                   </td>
//                   <td style={{ padding: "10px", textAlign: "center" }}>
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => handleDelete(product.id)}
//                     >
//                       <i className="bi bi-x"></i>
//                     </button>
//                   </td>
//                 </tr>
              
//               ))}
//             </tbody>
//           </table>
          
//         ) : (
//           <center><h3>Your cart is empty.</h3></center>
          
//         )}
//       </div>
       

//     <center>
//       {cart.length > 0 ? (
//          /* Display total price */ 
//        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" ,marginRight:"auto"}}>
//        <h3>Total: ${getTotal()}</h3>
     
          
//         <Link to="/bill">
//         <div className="btn btn-outline-danger m-3">Go to Bill</div>
//       </Link></div>):(
//       <Link to="/Allproduct">
//         <div className="btn btn-outline-danger m-3">Go to Shoping</div>
//       </Link>)}
//     </center>
//     </>
//   );
// }; 

// export default Cart;

import React from "react";
import { useCart } from "./hm/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, handleDelete, setCart } = useCart();

  // Function to handle manual quantity change
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0 || isNaN(newQuantity)) return; // Prevent invalid quantities

    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity } // Update the quantity for the specific product
          : product
      )
    );
  };

  // Calculate the total price of all products in the cart
  const getTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <>
      <div
        className="table-responsive"
        style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
      >
        <h2 style={{ marginBottom: "20px" }}>Your Cart</h2>

        {cart.length > 0 ? (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "left",
            }}
          >
            <thead>
              <tr>
                <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                  Product
                </th>
                <th
                  style={{
                    borderBottom: "1px solid #ccc",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  Price
                </th>
                <th
                  style={{
                    borderBottom: "1px solid #ccc",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  Quantity
                </th>
                <th
                  style={{
                    borderBottom: "1px solid #ccc",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  Subtotal
                </th>
                <th
                  style={{
                    borderBottom: "1px solid #ccc",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td style={{ padding: "10px" }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: "50px", verticalAlign: "middle" }}
                    />
                    &nbsp; {product.name}
                  </td>
                  <td style={{ padding: "10px", textAlign: "center" }}>
                    ${product.price}
                  </td>
                  <td style={{ padding: "10px", textAlign: "center" }}>
                    <input
                      type="number"
                      min="1"
                      value={product.quantity} // Show the current quantity
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value, 10);
                        if (!isNaN(newQuantity)) {
                          handleQuantityChange(product.id, newQuantity); // Update quantity
                        }
                      }}
                      style={{
                        width: "60px",
                        textAlign: "center",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                      }}
                    />
                  </td>
                  <td style={{ padding: "10px", textAlign: "center" }}>
                    ${product.price * product.quantity} {/* Dynamic subtotal */}
                  </td>
                  <td style={{ padding: "10px", textAlign: "center" }}>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(product.id)}
                    >
                      <i className="bi bi-x"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <center>
            <h3>Your cart is empty.</h3>
          </center>
        )}
      </div>

      <center>
        {cart.length > 0 ? (
          <div
            style={{
              padding: "20px",
              fontFamily: "Arial, sans-serif",
              marginRight: "auto",
            }}
          >
            <h3>Total: ${getTotal()}</h3>
            <Link to="/bill">
              <div className="btn btn-outline-danger m-3">Go to Bill</div>
            </Link>
          </div>
        ) : (
          <Link to="/Allproduct">
            <div className="btn btn-outline-danger m-3">Go to Shopping</div>
          </Link>
        )}
      </center>
    </>
  );
};

export default Cart;
