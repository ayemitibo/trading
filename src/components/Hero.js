import React from "react";

const Hero = () => {
  return (
    <div className="row justify-content-center bg-color">
      <div className="col-md-9 p-5 ">
        <div className="row">
          <div className="col-md-8  mx-auto">
            <h1 className="">Welcome to HitBtc start earning from Forex and Bitcoin</h1>
            <p className="lead">The highest paying Bitcoin mining pool and cloud mining provider on the market. Start mining Bitcoin today!</p>
            <button className=" px-5 py-2 btn btn-success">Sign Up Free</button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col mx-auto mt-5 p-2" style={{ width: "500px", height: "500px" }}>
            <img style={{ maxHeight: "100%" }} src="./images/undraw_btc_p2p_lth5.svg" alt="trading image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
