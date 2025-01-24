
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Categories = () => {
  const categories = [
    { icon: 'bi-phone', label: 'Phones' },
    { icon: 'bi-pc-display', label: 'Computers' },
    { icon: 'bi-smartwatch', label: 'SmartWatch' },
    { icon: 'bi-camera', label: 'Camera' },
    { icon: 'bi-headphones', label: 'HeadPhones' },
    { icon: 'bi-controller', label: 'Gaming' },
  ];

  return (
    <div class="container my-5">
         <h2 class="fw-bold text-danger p-1" style={{borderLeft:" 5px solid rgb(248, 54, 15)  "}}>Category </h2>
         <div class="d-flex text-center">
             <h3><span class=" me-3 text-center ">Brows By Category</span></h3>
         </div>
          <div className="container my-4">
            <div className="row justify-content-center">
              {categories.map((category, index) => (
                <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-2 p-2">
                  <div className="card text-center border">
                    <div className="card-body">
                      <i className={`bi ${category.icon}`} style={{ fontSize: '2rem' }}></i>
                      <p className="mt-2">{category.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </div>
  );
};

export default Categories;


