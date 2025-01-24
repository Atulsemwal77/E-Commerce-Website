const Footer = ()=>{
    return(
        <>
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 p-5 my-5 bg-black mx-1 " style={{color:" white",width:"99.5%"}}>
        
        <div class="col col-md-5 col-lg-3 mb-3">
           <h5>Exclusive</h5>
           <ul class="nav flex-column">
             <li class="nav-item mb-2"><h6>Subscribe</h6></li>
             <li class="nav-item mb-2">Get 10% off your first order</li>
             <li class="nav-item mb-2">Pricing</li>
             <li class="nav-item mb-2" >
                <input placeholder="Enter Your Email" style={{border: "1px solid white", color: "whitesmoke", backgroundColor: "black", padding: "2%" , borderRadius: "5px"}}/>
             </li>
             
           </ul>
        </div>
        
        <div class="col col-md-5 col-lg-2 mb-3">
           <h5>Support</h5>
           <ul class="nav flex-column">
             <li class="nav-item ">111 Bijoy sarani, Dhaka,</li>
             <li class="nav-item mb-2"> DH 1515, Bangladesh.</li>
             <li class="nav-item mb-2">exclusive@gmail.com</li>
             <li class="nav-item mb-2">+88015-88888-999</li>
             
           </ul>
        </div>
        
        <div class="col col-md-5 col-lg-2 mb-3">
           <h5>Account</h5>
           <ul class="nav flex-column">
             <li class="nav-item mb-2">My Account</li>
             <li class="nav-item mb-2">Login/Register</li>
             <li class="nav-item mb-2">Cart</li>
             <li class="nav-item mb-2">Wishlist</li>
             <li class="nav-item mb-2">Shop</li>
           </ul>
        </div>
        <div class="col col-md-5 col-lg-2 mb-3">
           <h5>Quick Link</h5>
           <ul class="nav flex-column">
             <li class="nav-item mb-2">Privacy Policy </li>
             <li class="nav-item mb-2">Terms of USe</li>
             <li class="nav-item mb-2">FAQ</li>
             <li class="nav-item mb-2">FAQs</li>
             <li class="nav-item mb-2">Contact</li>
           </ul>
        </div>
        <div class="col col-md-5 col-lg-2 mb-3">
           <h5>Download App</h5>
           <ul class="nav flex-column">
             <li class="nav-item mb-2">Save $3 with App New User Only</li>
             <li class="nav-item mb-2">
                <i class="bi bi-facebook mx-3 "></i>
                <i class="bi bi-twitter mx-3"></i>
                <i class="bi bi-instagram mx-3"></i>
                <i class="bi bi-linkedin mx-3"></i>
             </li>
             
           </ul>
        </div>
        
            
      </footer>
      


        
        </>
        );
}
export default Footer;
    

