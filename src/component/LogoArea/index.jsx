import ProtoTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import logoDark from "../../assets/img/logo-2.png";
import logo from "../../assets/img/logo.png";

const LogoArea = ({ className, dark }) => {
  return (
    <div className={`logo_area ${className ? className : ""}`}>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="logo">
              <Link to="/">
                <img src={dark ? logoDark : logo} alt="logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoArea;

LogoArea.propTypes = {
  className: ProtoTypes.string,
  dark: ProtoTypes.bool,
};
