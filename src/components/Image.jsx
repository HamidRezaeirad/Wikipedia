import React from "react";
import PropTypes from "prop-types";

const Image = props => {
  return (
    <>
      <img
        className={props.className}
        src={props.imageUrl}
        alt={props.alt || ""}
      />
    </>
  );
};

export default Image;

Image.propTypes = {
  imageUrl: PropTypes.string,
  alt: PropTypes.string
};
