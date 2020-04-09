import React, { Component } from "react";

const axiosInterceptors = (WrappedComponent, axios) => {
  return class extends Component {
    componentDidMount() {
      this.resInterceptor = axios.interceptors.request.use(req => {
        req.baseURL = req.baseURL.replace("en", this.props.i18n.language);
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(
        res => {
          return res;
        },
        error => {
          return Promise.reject(error);
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    render() {
      return (
        <>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default axiosInterceptors;
