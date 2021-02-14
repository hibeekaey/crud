import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container, Segment, Input, Button } from "semantic-ui-react";
import { BusinessList } from "../components/Business";

function Home({ businesses }) {
  return (
    <main>
      <Container>
        <div style={{ margin: "0 auto", maxWidth: 600 }}>
          <Segment as="section" basic vertical>
            <Input fluid placeholder="Search...">
              <input />
              <Button color="blue" type="submit">
                Search
              </Button>
            </Input>
          </Segment>
          <Segment as="section" basic vertical>
            <BusinessList businesses={businesses} />
          </Segment>
        </div>
      </Container>
    </main>
  );
}

Home.propType = {
  businesses: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    businesses: state.business.data
  };
};

export default connect(mapStateToProps)(Home);
