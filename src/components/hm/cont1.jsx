import slide1 from '../../assets/products/hero_endframe__cvklg0xk3w6e_large 2.png';
import slide2 from '../../assets/products/hero_endframe__cvklg0xk3w6e_large 2.png';
import slide3 from '../../assets/products/hero_endframe__cvklg0xk3w6e_large 2.png';
const Cont1 = ()=>{
    return(
        <>
         <div class="container-fluid mb-3">
        <div class="row">
            
            <nav class="col-md-3 col-lg-2 col-sm-12 d-md-block bg-white sidebar">
                <ul class="nav flex-column">
                    <li class="nav-item mb-3 ">Woman's Fashion <i class="bi bi-chevron-right"></i></li>
                    <li class="nav-item mb-3 "> Men's Fashion <i class="bi bi-chevron-right"></i></li>
                    <li class="nav-item mb-3 "> Electronics</li>
                    <li class="nav-item mb-3 "> Home & Lifestyle</li>
                    <li class="nav-item mb-3 "> Medicine</li>
                    <li class="nav-item mb-3 "> Sports & Outdoor</li>
                    <li class="nav-item mb-3 "> Baby's & Toys</li>
                    <li class="nav-item mb-3 "> Groceries & Pets</li>
                    <li class="nav-item  "> Health & Beauty</li>
                </ul>
            </nav>

            {/* <div class="carousel-item active">
                    <img src="New folder/Frame 560.png" class="d-block w-100 img-fluid" alt="..."/>
                </div> */}
            <div class="col-md-9 col-lg-9 p-3">
            <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src= {slide1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slide2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slide3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            
            </div> 
             
        </div>
    </div>
        </>
    )
}
export default Cont1;