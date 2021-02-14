import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Container, Segment, Form, Button } from "semantic-ui-react";
import { login } from "../actions";

function Login({ loggedIn, login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (loggedIn) history.push("/dashboard");
  }, [loggedIn, history]);

  return (
    <main>
      <Container>
        <Segment as="section" basic vertical>
          <Form onSubmit={() => login(email, password)}>
            <Form.Field>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Form.Field>
            <Button fluid type="submit">
              Login
            </Button>
          </Form>
        </Segment>
      </Container>
    </main>
  );
}

Login.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
