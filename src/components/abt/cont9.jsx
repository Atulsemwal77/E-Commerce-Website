import women from '../../assets/products/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png';
const Cont9 =()=>{

    return(
        <>
         <nav aria-label="breadcrumb ">
        <ol class="breadcrumb m-5">
          <li class="breadcrumb-item"><a style={{textDecoration: "none", color: "rgb(133, 131, 131)"}}>Home</a></li>
          <li class="breadcrumb-item active" aria-current="page" style={{color: "black"}}>About</li>
        </ol>
    </nav>
    
    <div class="row ">
        <div class="col-lg-6 col-md-10 ">
            <div class="p-5">

                <h4> Our Story</h4>
                <p>Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
        </div>
        <div class="col-lg-6 col-md-10 text-center">
           <img src={women} alt="" class="img-fluid" style={{width: "auto",height: "400px "}}/>
        </div>
    </div>
    <div class="container my-4">
        <div class="row justify-content-center">
          <div class="col-lg-3 col-sm-5 col-md-6 p-2">
            <div class="card text-center border">
              <div class="card-body">
                <i class="bi bi-house-door" style={{fonSize: "2rem"}}></i>
                <h3>10.5k</h3>
                <p class="mt-2">Sallers active our site</p>
              </div>
            </div>
          </div>
      
          <div class="col-lg-3 col-sm-5 col-md-6 p-2">
            <div class="card text-center border ">
              <div class="card-body">
                <i class="bi bi-coin" style={{fonSize: "2rem"}}></i>
                <h3>33k</h3>
                <p class="mt-2">Monthly Product Sale</p>
              </div>
            </div>
          </div>
      
          <div class="col-lg-3 col-sm-5 col-md-6 p-2">
            <div class="card text-center border">
              <div class="card-body">
                <i class="bi bi-bag-dash" style={{fonSize: "2rem"}}></i>
                <h3>45.5k</h3>
                <p class="mt-2">Customer active in our site</p>
              </div>
            </div>
          </div>
      
          <div class="col-lg-3 col-sm-5 col-md-6 p-2">
            <div class="card text-center border ">
              <div class="card-body">
                <i class="bi bi-currency-rupee" style={{fonSize: "2rem"}}></i>
                <h3>25k</h3>
                <p class="mt-2">Anual gross sale in our site</p>
              </div>
            </div>
          </div>
        </div>
    </div>

        </>
    );
}
export default Cont9;