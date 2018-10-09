import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Loadable from "react-loadable";
import NavBar from "./NavBar";
import { Provider as ReduxProvider } from "react-redux";

import store from "./store";

const LoadabelDetails = Loadable({
  loader: () => import("./Details"),
  loading() {
    return <h1>Loading split out code ...</h1>;
  }
});

const LoadabelResults = Loadable({
  loader: () => import("./Results"),
  loading() {
    return <h1>Loading split out code ...</h1>;
  }
});
const LoadabelSearchParapms = Loadable({
  loader: () => import("./SearchParams"),
  loading() {
    return <h1>Loading split out code ...</h1>;
  }
});

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <ReduxProvider store={store}>
          <Router>
            <LoadabelResults path="/" />
            <LoadabelDetails path="/details/:id" />
            <LoadabelSearchParapms path="/search-params" />
          </Router>
        </ReduxProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
