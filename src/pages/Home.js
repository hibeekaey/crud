import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container, Segment, Form, Input } from "semantic-ui-react";
import { BusinessList } from "../components/Business";

function Home({ businesses }) {
  const [search, setSearch] = useState("");
  const [filteredBusinesses, setFilteredBusinesses] = useState(businesses);

  useEffect(() => {
    const regex = new RegExp(search.trim(), "gi");
    const filteredBusinesses = businesses.filter(
      (business) =>
        business.name.match(regex) || business.description.match(regex)
    );

    setFilteredBusinesses(filteredBusinesses);
  }, [search, businesses, setFilteredBusinesses]);

  return (
    <main>
      <Container>
        <div style={{ margin: "0 auto", maxWidth: 600 }}>
          <Segment as="section" basic vertical>
            <Form>
              <Form.Field>
                <label>Search Business</label>
                <Input
                  fluid
                  value={search}
                  onInput={(e) => setSearch(e.target.value)}
                  placeholder="Search Business"
                />
              </Form.Field>
            </Form>
          </Segment>
          <Segment as="section" basic vertical>
            <BusinessList businesses={filteredBusinesses} />
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
