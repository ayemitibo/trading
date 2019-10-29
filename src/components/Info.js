import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Info = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-10 align-center">
        <div className="row">
          <div className="col-md-12">
            <h3 className="h3col">Its so easy to get started</h3>
          </div>

          <div className="col-md-4">
            <div>
              <div className="image-width">
                <img style={{ maxHeight: "100%" }} src="./images/settings.svg" alt="trading image" />
                <p>Hello</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-width">
              <div>
                <img style={{ maxHeight: "100%" }} src="./images/artificial-intelligence.svg" alt="trading image" />
                <p>Hello</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <div className="image-width">
                <img style={{ maxHeight: "100%" }} src="./images/coin.svg" alt="trading image" />
                <p>Hello</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
