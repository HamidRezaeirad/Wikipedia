import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Spinner } from "./components";
const Main = lazy(() => import("./containers/Main"));
const NotFound = lazy(() => import("./containers/NotFound"));
const Welcome = lazy(() => import("./containers/Welcome"));

const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<Spinner />}>
          <section className="cd-intro">
            <div className="cd-intro-content bouncy">
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/search/:title" component={Main} />
                <Route exact path="/welcome" component={Welcome} />
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
