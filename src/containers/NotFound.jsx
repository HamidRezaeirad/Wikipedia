import React from "react";
import { Link } from "react-router-dom";

const NotFound = props => {
  return (
    <div className="row">
      <div className="col-12">
        <h1>404</h1>
      </div>
      <div className="col-12">
        <span>Sorry, page not found</span>
      </div>
      <div className="col-12 mt-5 ">
        <Link to="/" className="cd-btn">
          Home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
