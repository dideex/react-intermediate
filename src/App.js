import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import pf from "petfinder-client";
// import Results from "./Results";
import Loadable from "react-loadable";
// import SearchParams from "./SearchParams";
import { Provider } from "./SearchContext";
import NavBar from "./NavBar";
import { Provider as ReduxProvider } from "react-redux";

import store from "./store";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

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
  constructor(props) {
    super(props);

    this.state = {
      location: "Seattle, WA",
      animal: "",
      breed: "",
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      getBreeds: this.getBreeds
    };
  }
  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };
  handleAnimalChange = event => {
    this.setState(
      {
        animal: event.target.value
      },
      this.getBreeds
    );
  };
  handleBreedChange = event => {
    this.setState({
      breed: event.target.value
    });
  };
  getBreeds() {
    if (this.state.animal) {
      // const pfPromise = import ('petfinder-client')
      // pfPrimes.then(pf => {

      // })
      petfinder.breed
        .list({ animal: this.state.animal })
        .then(data => {
          if (
            data.petfinder &&
            data.petfinder.breeds &&
            Array.isArray(data.petfinder.breeds.breed)
          ) {
            this.setState({
              breeds: data.petfinder.breeds.breed
            });
          } else {
            this.setState({ breeds: [] });
          }
        })
        .catch(console.error);
    } else {
      this.setState({
        breeds: []
      });
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <ReduxProvider store={store}>
          <Provider value={this.state}>
            <Router>
              <LoadabelResults path="/" />
              <LoadabelDetails path="/details/:id" />
              <LoadabelSearchParapms path="/search-params" />
            </Router>
          </Provider>
        </ReduxProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
