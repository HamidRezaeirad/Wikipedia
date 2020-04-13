import React from "react";
import PropTypes from "prop-types";
import { Image } from "../components";

const Profile = (props) => {
  return (
    <>
      <div className="row">
        <article className="row single-post mt-5 no-gutters">
          <div className="col">
            <div className="image-wrapper float-md-left pr-3">
              <Image
                className="p-3"
                imageUrl={props.state && props.state.thumbnail.source}
                alt={props.state && props.state.title}
              ></Image>
            </div>
            <div className="col">
              <h1>{props.state && props.state.title}</h1>
            </div>
            <div className="col">
              <p>{props.state && props.state.description}</p>
            </div>
            <div className="col single-post-content-wrapper text-justify">
              <p> {props.state && props.state.extract}</p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Profile;

Profile.propTypes = {
  state: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.object.isRequired,
    extract: PropTypes.string.isRequired,
  }),
};
