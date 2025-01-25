import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'

import {BrowserRouter as Router, Routes , Route, Link } from "react-router-dom"
import Home from "./components/home"
import Contact from './components/contact';
import Wishlist from './components/wishlish';
import About from './components/about'
import Cart from "./components/cart"

import Footer from './components/footer';
import NextPage from './components/NextPage';
import {CartProvider} from './components/hm/CartContext';
import Signup from './components/Signup';
import Login from './components/Login'
import Bill from './components/bill'
import Allproduct from './components/allproduct'
import Account from './components/Account';
import Logout from './components/Logout'

function App (){

  return (
     <>
     <CartProvider>
      <Router>
      <div class="d-grid gap-2">
        <button class="btn btn-dark" type="button">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! &nbsp; &nbsp;
        <a href="#" style= {{color: "white"}}>shopNow</a></button>
       </div>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div class="container">
            <a class="navbar-brand" href="#">E-commerce </a>
            <button class="navbar-toggler end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        < Link to ="/" class="nav-link active" aria-current="page" >Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to = "/contact" class="nav-link"  > Contact</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/About" class="nav-link">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Signup" class="nav-link" >SignUp </Link>
                    </li>
                    
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="What are you looking for?" aria-label="Search" />
                    <button class="btn btn-outline-success"><i class="bi bi-search"></i></button>
                </form>
                <ul class="navbar-nav ms-3">
                    <li class="nav-item">
                        <Link to="/Wishlist" class="nav-link" ><i class="bi bi-heart"></i></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Cart" class="nav-link" ><i class="bi bi-cart"></i></Link>
                    </li>
                    {/* <li class="nav-item">
                        <Link to="/Cart" class="nav-link" >
                        <button type="button" class="btn btn-primary position-relative"><i class="bi bi-heart"></i>
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{wishlist.length}
      3</span></button>
                        </Link>
                    </li>  */}
                    
                     <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"  >
                          <i class="bi bi-person-circle"></i>
                        </button>
                        <ul class="dropdown-menu  " style={{width: "max-content", cursor:"pointer"}}>
                          {/* <li><i class="bi bi-person-circle  me-2" ></i>My Profile </li>
                          <li><i class="bi bi-briefcase      me-2"     ></i>My Order</li> */}
                          {/* <li><i class="bi bi-x-circle       me-2"      ></i>My Cancellations</li>
                          <li><i class="bi bi-star           me-2"          ></i >My Reviews</li>
                          <li><i class="bi bi-box-arrow-left me-2"></i>LogOut</li> */}
                          <li> <p className='m-1' data-bs-toggle="modal" data-bs-target="#exampleModal">Profile</p></li>
                          <li> <Link to="/Cart" class="nav-link" >My Orders</Link></li>
                        </ul>
                    </div> 
                    
                </ul>
            </div>
            
        </div>
        {/*For modal  */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">User Profile</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="container mt-5">
      <div className="card mx-auto card2" style={{ maxWidth: "350px" }}>
        <div className="card-body ">
          <img
            src= "https://via.placeholder.com/150"
            alt="user img"
            className="rounded-circle mb-3"
            style={{ width: "100px", height: "100px" }}
          />
          <h5 className="card-title">Name : Atul Semwal</h5>
          <p className="card-text text-muted">Email: abc123@gmail.com</p>
          <p className="card-text">Age: 22</p>
          <p className="card-text">Bio: Intern</p>
        
        </div>
      </div>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>   {/*Modal End */}

    </nav>
       <Routes>
         <Route path='/' element={<Home></Home>}> </Route>
         <Route path='/Contact' element={<Contact/>}> </Route>
         <Route path='/About' element={<About/>}> </Route>
         <Route path='/Cart' element={<Cart/>}> </Route>
         <Route path='/Wishlist' element={<Wishlist/>}> </Route>
         <Route path='/next-page' element={<NextPage></NextPage>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>
         <Route path="/Login" element={<Login></Login>} />
         <Route path = '/bill' element={<Bill></Bill>}/>
         <Route path='/Allproduct'element={<Allproduct></Allproduct>}/>
         <Route path='/Logout' element={<Logout/>}/>
         <Route path="/Account" element={<Account />} />


         
       </Routes>
       
      </Router>
      <Footer></Footer>
    
       


      </CartProvider>
     </>
  );
}

export default App
