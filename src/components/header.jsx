
const Header = ()=>{
    return(
      <>
       <div class="d-grid gap-2">
        <button class="btn btn-dark" type="button">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! &nbsp; &nbsp;
        <a href="#" style= {{color: "white"}}>shopNow</a></button>
       </div>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div class="container">
            <a class="navbar-brand" href="#">Exclusive</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#" >Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html" > Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sign.html">Sign Up</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="What are you looking for?" aria-label="Search" />
                    <button class="btn btn-outline-success"><i class="bi bi-search"></i></button>
                </form>
                <ul class="navbar-nav ms-3">
                    <li class="nav-item">
                        <a class="nav-link" href="wishlist.html"><i class="bi bi-heart"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cart.html"><i class="bi bi-cart"></i></a>
                    </li>
                    
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"  >
                          <i class="bi bi-person-circle"></i>
                        </button>
                        <ul class="dropdown-menu  " style={{width: "max-content"}}>
                          <li><i class="bi bi-person-circle  me-2" ></i>Manage My Account</li>
                          <li><i class="bi bi-briefcase      me-2"     ></i>My Order</li>
                          <li><i class="bi bi-x-circle       me-2"      ></i>My Cancellations</li>
                          <li><i class="bi bi-star           me-2"          ></i >My Reviews</li>
                          <li><i class="bi bi-box-arrow-left me-2"></i>LogOut</li>
                        </ul>
                    </div>
                    
                </ul>
            </div>
        </div>
    </nav>
     {<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> }
      </>
    );
}
export default Header;
