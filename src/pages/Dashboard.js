import React from "react";
import { Container, Segment, Input, Grid } from "semantic-ui-react";

function Dashboard() {
  return (
    <main>
      <Container>
        <Segment as="section" basic vertical>
          <Input fluid action="Search" placeholder="Search..." />
        </Segment>
        <Segment as="section" basic vertical>
          <Grid columns={2}>
            <Grid.Column computer={4} mobile={16}></Grid.Column>
            <Grid.Column computer={12} mobile={16}></Grid.Column>
          </Grid>
        </Segment>
      </Container>
    </main>
  );
}

export default Dashboard;
