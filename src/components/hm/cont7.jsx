import Cont7A from "./cont7A";
import ps5 from '../../assets/products/ps5-slim-goedkope-playstation_large 1.png'
import women from '../../assets/products/attractive-woman-wearing-hat-posing-black-background 1.png'
import img from '../../assets/products/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png'
import img2 from '../../assets/products/652e82cd70aa6522dd785109a455904c.png'
const Cont7 = ()=>{
    return(
      <>
      <div class="container my-5 " style={{height:"auto"}}>
            <h2 class="fw-bold text-danger p-1" style={{borderLeft: "5px solid rgb(248, 54, 15) "}}>Featured</h2>
            <div class="d-flex text-center">
                <h3><span class=" me-3 text-center ">New Arrival</span></h3>
            </div>
    

        <div class="container py-5">
            <div class="row g-3">
                <div class="col-lg-6">
                    <div class="card text-white p-2" style={{backgroundColor:"black",height:"780px"}}>
                        <img src={ps5} class="card-img" alt="PlayStation 5"/>
                        <div class="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 class="card-title">PlayStation 5</h5>
                            <p class="card-text">Black and White version of the PS5 coming out on sale.</p>
                            <a href="#" style={{color: "white"}}>Shop Now</a>
                        </div>
                    </div>
                
                    
                </div> 
        
                <div class="col-lg-6" >
                    <div class="row g-3">
                        
                        <div class="col-sm-12">
                            <div class="card text-white">
                                <img src={women} class="card-img" alt="Women's Collections"/>
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                    <h5 class="card-title">Women's Collections</h5>
                                    <p class="card-text">Featured woman collections that give you another vibe.</p>
                                    <a href="#" style={{color: "white"}}>Shop Now</a>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col-sm-6 ">
                            
                            <div class="card text-white p-2 " style={{backgroundColor:"black",height:"350px"}}>
                                <img src={img} class="card-img " alt="Speakers"/>
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                    <h5 class="card-title">Speakers</h5>
                                    <p class="card-text">Amazon wireless speakers.</p>
                                    <a href="#" style={{color: "white"}}>Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card text-white p-2 " style={{backgroundColor:"black", height:"350px"}}>
                                <img src={img2} class="card-img " alt="Perfume"/>
                                <div class="card-img-overlay d-flex flex-column justify-content-end">
                                    <h5 class="card-title">Perfume</h5>
                                    <p class="card-text">GUCCI INTENSE OUD EDP</p>
                                    <a href="#" style={{color: "white"}}>Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Cont7A></Cont7A>
    
    
      </>
    );
}
export default Cont7;