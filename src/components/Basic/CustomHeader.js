import React from "react";
import PropTypes from "prop-types";
import { Container, Segment, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

function CustomHeader({ loggedIn, logout }) {
  return (
    <Segment as="header" clearing vertical style={{ backgroundColor: "#fff" }}>
      <Container>
        <Menu as="nav" text size="small">
          <Menu.Item name="CRUD">
            <Link
              to="/"
              style={{ fontSize: 32, fontWeight: 600, color: "green" }}
            >
              CRUD
            </Link>
          </Menu.Item>

          <Menu.Menu position="right">
            {loggedIn ? (
              <>
                <Menu.Item name="dashboard">
                  <Link to="/dashboard" style={{ color: "green" }}>
                    Dashboard
                  </Link>
                </Menu.Item>
                <Menu.Item name="logout" onClick={() => logout()} />
              </>
            ) : (
              <Menu.Item name="logout">
                <Link to="/login" style={{ color: "#00000099" }}>
                  Login
                </Link>
              </Menu.Item>
            )}
          </Menu.Menu>
        </Menu>
      </Container>
    </Segment>
  );
}

CustomHeader.propTypes = {
  logout: PropTypes.func.isRequired
};

export default CustomHeader;
