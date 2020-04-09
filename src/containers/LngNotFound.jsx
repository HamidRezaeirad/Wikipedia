import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Dropdown } from "../components";
import { FullLanguageOptions } from "../api/static.data";
import "./LngNotFound.css";

const LngNotFound = (props) => {
  let newItem = {
    label: "Please select ...",
    value: "0",
  };

  const [selectedLanguage, setSelectedLanguage] = useState(newItem);

  const onDropdownChangeHandler = ({ target }) => {
    props.i18n.changeLanguage(target.value);
    let selectedOption = FullLanguageOptions.filter(
      (e) => e.value === target.value
    )[0];
    setSelectedLanguage(selectedOption);
  };

  return (
    <div className="row">
      <div className="col-12">
        <h1>404</h1>
      </div>
      <div className="col-12 pt-3">
        <span>Sorry, your preferred language is not available.</span>
      </div>
      <div className="col-12 pt-3">
        <span>Please select default language.</span>
      </div>
      <div className="col-md-12 pt-4">
        <div className="divLanguages">
          <Dropdown
            Id="ddlLangueges"
            value={selectedLanguage.value}
            onChange={(e) => onDropdownChangeHandler(e)}
            options={FullLanguageOptions}
          ></Dropdown>
        </div>
      </div>
      <div className="col-12 pt-4 ">
        <Link to="/" className="cd-btn">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default withTranslation()(LngNotFound);
