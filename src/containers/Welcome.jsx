import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Dropdown } from "../components";
import LanguageOptions from "../data/languageList.json";
import "./Welcome.css";

const Welcome = (props) => {
  let newItem = {
    label: "Please select ...",
    value: "0",
  };

  const [selectedLanguage, setSelectedLanguage] = useState(newItem);

  const onDropdownChangeHandler = ({ target }) => {
    props.i18n.changeLanguage(target.value);
    let selectedOption = LanguageOptions.filter(
      (e) => e.value === target.value
    )[0];
    setSelectedLanguage(selectedOption);
  };
  const { t } = props;
  return (
    <div className="row">
      <div className="col-12">
        <h1>{t("welcome.title")}</h1>
      </div>
      <div className="col-12 pt-3">
        <span>{t("welcome.description")}</span>
      </div>
      <div className="col-12 pt-3">
        <span>{t("welcome.selectLanguage")}</span>
      </div>
      <div className="col-md-12 pt-4">
        <div className="divLanguages">
          <Dropdown
            Id="ddlLangueges"
            value={selectedLanguage.value}
            onChange={(e) => onDropdownChangeHandler(e)}
            options={LanguageOptions}
          ></Dropdown>
        </div>
      </div>

      <div className="col-12 pt-4 ">
        <Link to="/" className="cd-btn">
          {t("welcome.continue")}
        </Link>
      </div>
    </div>
  );
};

export default withTranslation()(Welcome);
