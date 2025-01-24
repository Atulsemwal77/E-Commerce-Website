import { Link } from 'react-router-dom';
import React from 'react';

const NextPage = () => {

  return (
    <>
    
    <Link to =  "/"><div class="btn btn-outline-danger m-3 "> Back to Home </div>   </Link> 

    <div class="container my-5">
        <div class="row">
            <div class="col-lg-3 col-md-5 col-sm-1 " style={{width: "auto", height: "550px"}}>
                
                <div class="ig" ><img src="New folder/image 57.png" alt=""  /></div>
                <div class="ig" ><img src="New folder/image 57.png" alt="" /></div>
                <div class="ig" ><img src="New folder/image 57.png" alt="" /></div>
                <div class="ig" ><img src="New folder/image 57.png" alt="" /></div>
                
            </div>

            <div class="col-lg-5 col-md-6 col-sm-4" style={{width: "auto"}}>
                <div class="ig2 " > <img src="New folder/image 63.png" class="img-fluid" />

                </div>
            </div>

            <div class="col-lg-4 col-sm-12" style={{ height: "550px"}}>
                <h2>Havic HV G-92 Gamepad</h2>
                <p ><span class="text-warning"><i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star"></i></span> &nbsp;    (150 Reviews) &nbsp; &nbsp;| in Stock </p>
                <h3>$192.00</h3>
                <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                <div class="d-flex ">
                    <h5 class="d-flex">Colors : </h5> 
                    <p class="d-flex justify-content-center align-items-center mx-2" 
                    style={{width: "20px" ,height: "20px", backgroundColor: "#3498db", bordeRadius: "50%"}}></p>
                    <p class="d-flex justify-content-center align-items-center mx-1" 
                    style={{width: "20px", height: "20px", backgroundColor: "#fa4807", bordeRadius: "50%"}}></p>
                 
               </div>
               <div class="d-flex ">
                       <h4>Size : </h4>
                       <p class="d-flex justify-content-center align-items-center mx-2" 
                    style={{width: "25px", height: "25px" , border:"1px solid black" ,borderRadius:" 5px"}}>XS</p>
                       <p class="d-flex justify-content-center align-items-center mx-2" 
                    style={{width: "25px", height: "25px" , border:"1px solid black" ,borderRadius:" 5px"}}>S</p>
                       <p class="d-flex justify-content-center align-items-center mx-2" 
                    style={{width: "25px", height: "25px" , border:"1px solid black" ,borderRadius:" 5px"}}>M</p>
                       <p class="d-flex justify-content-center align-items-center mx-2" 
                    style={{width: "25px", height: "25px" , border:"1px solid black" ,borderRadius:" 5px"}}>L</p>
                       <p class="d-flex justify-content-center align-items-center mx-2" 
                    style={{width: "25px", height: "25px" , border:"1px solid black" ,borderRadius:" 5px"}}>XL</p>
               </div>

               <div class=" d-flex ">
                    <div class="d-flex">
                      <div class="input-group" style={{maxWidth: "150px"}}>
                        <button class="btn btn-outline-secondary" type="button" id="btn-decrease">-</button>
                        <input type="number" class="form-control text-center" value="0" id="number-box"/>
                        <button class="btn btn-outline-secondary" type="button" id="btn-increase">+</button>
                      </div>
                    </div>

                   <div class="btn btn-danger mx-2">Buy Now</div>
                   
                   <div class="text-center"  style={{ width: "35px",border:"1px solid black", borderRadius: "5px"}}><i class="bi bi-heart" style={{fontSize: "1.5rem"}}></i> </div>

                </div>

                <div class="del my-4 p-2" style={{height: "auto", border: "1px solid  black"}}>
                    <div class="truck d-flex align-items-center " >
                        <i class="bi bi-truck" style={{fontSize: "2.5rem"}}></i>
                        <p class="mx-2">Free Delivery <br/>
                        <span>Enter Your postal code for Delivery Availablity</span></p>
                    </div>
                    <hr/>
                    <div class="truck d-flex align-items-center " >
                        <i class="bi bi-arrow-repeat" style={{fontSize: "2.5rem"}}></i>
                        <p class="mx-2">Return Delivery <br/>
                        <span>Free 30 Days Delivery Returns. Details</span></p>
                    </div>

                </div>
              
              
            
                
                  
            </div>
        </div>
    </div>

    </>
  );
};

export default NextPage;
