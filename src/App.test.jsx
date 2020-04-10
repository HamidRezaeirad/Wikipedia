import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import { Spinner } from "./components";
import LngNotfound from "./containers/LngNotfound";
import Notfound from "./containers/Notfound";
import Main from "./containers/Main";

configure({ adapter: new Adapter() });

describe("rendering App container", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render <Spinner /> when calling wikipedia API", () => {
    expect(wrapper.contains([<Spinner />]));
  });
  it("should render <Main />", () => {
    expect(wrapper.contains([<Main />]));
  });
  it("should render <LngNotfound /> after calling wikipedia API", () => {
    expect(wrapper.contains([<LngNotfound />]));
  });
  it("should render <Notfound /> after calling wikipedia API", () => {
    expect(wrapper.contains([<Notfound />]));
  });
});
