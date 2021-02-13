import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { CustomHeader } from "./components/Basic";
import { logoutUser } from "./actions";

function App({ loggedIn, logout }) {
  return (
    <div>
      <Router>
        <CustomHeader loggedIn={loggedIn} logout={logout} />
        {renderRoutes(routes)}
      </Router>
    </div>
  );
}

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
