import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Cont8 =()=>{
    return(
        <>
        <nav aria-label="breadcrumb ">
        <ol class="breadcrumb m-5">
          <li class="breadcrumb-item"><a style={{textDecoration: "none", color: "rgb(133, 131, 131)"}}>Home</a></li>
          <li class="breadcrumb-item active" aria-current="page" style={{color: "black"}}>Contact</li>
        </ol>
    </nav>
    


    <div class="container py-5">
            <div class="row">
                
                <div class="col-md-4 mb-4">
                    <div class="card p-4 border-0 shadow card2">
                        <h5 class="mb-3"> <i class="bi bi-telephone-fill me-2"></i>Call To Us</h5>
                        <p>We are available 24/7, 7 days a week.</p>
                        <p class="fw-bold">Phone: +8801611112222</p>
                        <hr/>
                        <h5 class="mt-3 mb-3"><i class="bi bi-envelope me-2"></i>Write To Us</h5>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails:</p>
                        <p class="mb-1">customer@exclusive.com</p>
                        <p>support@exclusive.com</p>
                    </div>
                </div>
            
                <div class="col-md-8">
                    <div class="card p-4  shadow card2">
                        <form class="row">
                            <div class="col-lg-4 mb-3">
                                <input type="text" class="form-control" placeholder="Your Name *" required/>
                            </div>
                            <div class=" col-lg-4 mb-3">
                                <input type="email" class="form-control" placeholder="Your Email *" required/>
                            </div>
                            <div class="col-lg-4 mb-3">
                                <input type="tel" class="form-control" placeholder="Your Phone *" required/>
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control" rows="5" placeholder="Your Message"></textarea>
                            </div>
                            <div class="text-end">

                                <button type="submit" class="btn btn-danger w-50">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}
export default Cont8;
