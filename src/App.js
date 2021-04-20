import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicReact from "./pages/learning/BasicReact/BasicReact";
import BasicHome from "./pages/learning/Home/Home";
import BasicMovieDetail from "./pages/learning/MovieDetail/MovieDetail";
import CinemArsNavbar from "./components/CinemArs/NavbarCinemars";
import Home from "./pages/main/Home/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/learning/basic-react" exact component={BasicReact} />
          <Route path="/learning/basic-home" exact component={BasicHome} />
          <Route
            path="/learning/basic-movie-detail/:id"
            exact
            component={BasicMovieDetail}
          />
          <Route path="/cinemars" exact component={CinemArsNavbar} />
          <Route path="/cinemars/home" exact component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
