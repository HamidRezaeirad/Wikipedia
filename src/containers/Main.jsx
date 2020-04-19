import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Redirect } from "react-router-dom";
import Profile from "./Profile";
import { Spinner, Dropdown } from "../components";
import { getUserProfile } from "../api/wikipedia";
import Placeholder from "../assests/images/Placeholder.jpg";
import service from "../services/wikipedia";
import axiosInterceptors from "../hoc/axiosInterceptors";
import LanguageOptions from "../data/languageList.json";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: "The title is not available",
        description: "The description is not available",
        thumbnail: { source: Placeholder },
        extract: "",
      },
      loading: false,
      notfound: false,
      selectedLanguage: { label: "English", value: "en", orginal: "English" },
    };
  }

  componentDidMount() {
    this.i18n = this.props.i18n;
    this.featchData();
  }

  featchData = () => {
    let state = this.state;
    let lng = this.i18n.language;
    const languages = LanguageOptions.filter((e) => e.value === lng);
    this.setState({ ...this.state, loading: true }, () => {
      if (languages.length > 0) {
        state.selectedLanguage = languages[0];
        let title = this.props.match.params.title || "Albert+Einstein";
        getUserProfile({ title })
          .then((res) => {
            let data =
              res.data.query && res.data.query.pages && res.data.query.pages[0];
            this.updateData(data, state);
            this.setState(state);
          })
          .catch(() => {
            state.loading = false;
            this.setState(state);
          });
      } else {
        this.setState({ ...this.state, notfound: true });
      }
    });
  };

  updateData = (data, state) => {
    const { t } = this.props;
    if (data) {
      state.data.title = data.title || t("title");
      state.data.description = data.description || t("description");
      state.data.extract = data.extract || "";
      state.data.thumbnail.source =
        (data.thumbnail && data.thumbnail.source) || Placeholder;
    } else {
      state.data.title = t("title");
      state.data.description = t("description");
    }
    state.loading = false;
  };

  onDropdownChangeHandler = (event) => {
    this.i18n.changeLanguage(event.target.value, () => {
      this.featchData();
    });
  };

  render() {
    return (
      <div>
        {this.state.notfound ? (
          <Redirect to="welcome" />
        ) : this.state.loading ? (
          <Spinner />
        ) : (
          <div>
            <div className="row ">
              <div className="col-xl-2 col-md-2 col-sm-4 col-xs-12 text-left">
                <Dropdown
                  Id="ddlLangueges"
                  placeholder="Please select ..."
                  value={this.state.selectedLanguage.value}
                  onChange={(e) => this.onDropdownChangeHandler(e)}
                  options={LanguageOptions}
                ></Dropdown>
              </div>
              <div className="col-xl-10 col-md-10 col-sm-8 col-xs-12 text-right">
                <span>{this.state.selectedLanguage.orginal}</span>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-12  text-left">
                <Profile state={this.state.data} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withTranslation()(
  axiosInterceptors(withTranslation()(Main), service)
);
