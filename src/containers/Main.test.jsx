import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./Main";
import { Spinner } from "../components";
import Profile from "../containers/Profile";

import "../i18n";

configure({ adapter: new Adapter() });

describe("rendering Main container", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <withTranslation>
        <Main featchData={() => {}} />
      </withTranslation>
    );
  });

  it("should render <Spinner /> when calling wikipedia API", () => {
    expect(wrapper.contains([<Spinner />]));
  });
  it("should render <Profile /> after calling wikipedia API", () => {
    wrapper.setProps({ state: { title: "Albert Einstein" } });
    expect(wrapper.contains([<Profile />]));
  });
});
