import React from "react";
import { Container, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

function CustomHeader() {
  return (
    <Segment as="header" clearing vertical>
      <Container>
        <Link to="/" style={{ color: "#333" }}>
          CRUD
        </Link>
      </Container>
    </Segment>
  );
}

export default CustomHeader;
