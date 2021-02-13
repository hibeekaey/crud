import React from "react";
import { Container, Segment, Input } from "semantic-ui-react";

function Home() {
  return (
    <main>
      <Container>
        <Segment as="section" basic vertical>
          <Input fluid action="Search" placeholder="Search..." />
        </Segment>
        <Segment as="section" basic vertical></Segment>
      </Container>
    </main>
  );
}

export default Home;
