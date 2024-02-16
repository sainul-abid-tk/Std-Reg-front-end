import React from "react";
import stdSir from '../assets/std-sir.png'
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <>
      <div  className="w-100 ">
        
        <div style={{ height: "100vh" }} className="row">
          <div  className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center ">
          <div className="p-4">
          <h1 className="mb-3">Education</h1>
            <h5 className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi laborum assumenda nulla exercitationem asperiores. Eum, eveniet nulla expedita ex maiores ipsam quibusdam cumque nihil quidem cupiditate incidunt, rem soluta?</h5>
            
            <p className="mb-3 me-3 text-warning">Are You New Student?Click To Register</p>
            <Link to={'/register'}><button className="btn btn-success ">Register</button></Link>
          
            </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center ">
           <img src={stdSir} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
