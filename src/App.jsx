import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Spinner } from "./components";
const Main = lazy(() => import("./containers/Main"));
const NotFound = lazy(() => import("./containers/NotFound"));
const LngNotFound = lazy(() => import("./containers/LngNotFound"));

const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<Spinner />}>
          <section className="cd-intro">
            <div className="cd-intro-content bouncy">
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/:title" component={Main} />
                <Route exact path="/lng/notfound" component={LngNotFound} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </section>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
