import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="">
      <div className="d-flex justify-content-center Backdrop text-light">
        <div
          className="spinner-border m-auto"
          style={{ width: "5rem", height: "5rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
