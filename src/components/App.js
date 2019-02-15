/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import PostsPage from "./containers/PostPage";
import UserPage from "./containers/UserPage";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: "blue" };
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Users
          </NavLink>
          {" | "}
          <NavLink to="/posts-page" activeStyle={activeStyle}>
            Posts
          </NavLink>
          {" | "}
        </div>
        <Switch>
          <Route exact path="/" component={UserPage} />
          <Route path="/posts-page" component={PostsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
