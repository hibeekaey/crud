import React from "react";
import { Container, Segment, Header, Icon } from "semantic-ui-react";

function NotFound() {
  return (
    <main>
      <Container>
        <Segment as="section" basic vertical>
          <Header as="h2" icon textAlign="center">
            <Icon name="dont" circular />
            <Header.Content>Are you lost?</Header.Content>
          </Header>
        </Segment>
      </Container>
    </main>
  );
}

export default NotFound;
