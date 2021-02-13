import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container, Segment, Input } from "semantic-ui-react";
import { BusinessList } from "../components/Business";

function Home({ businesses }) {
  return (
    <main>
      <Container>
        <Segment as="section" basic vertical>
          <Input fluid action="Search" placeholder="Search..." />
        </Segment>
        <Segment as="section" basic vertical>
          <BusinessList businesses={businesses} />
        </Segment>
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
