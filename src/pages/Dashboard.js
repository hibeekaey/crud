import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Container, Segment, Input, Tab } from "semantic-ui-react";
import { BusinessForm, BusinessList } from "../components/Business";
import { CategoryForm, CategoryList } from "../components/Category";

function Dashboard({ loggedIn, businesses, categories }) {
  const history = useHistory();

  useEffect(() => {
    if (!loggedIn) {
      history.push("/login");
    }
  }, [loggedIn, history]);

  const panes = [
    {
      menuItem: "Business",
      render: () => (
        <>
          <BusinessForm />
          <BusinessList businesses={businesses} />
        </>
      )
    },
    {
      menuItem: "Category",
      render: () => (
        <>
          <CategoryForm />
          <CategoryList categories={categories} />
        </>
      )
    }
  ];

  return (
    <main>
      <Container>
        <Segment as="section" basic vertical>
          <Input fluid action="Search" placeholder="Search..." />
        </Segment>
        <Segment as="section" basic vertical>
          <Tab
            menu={{ fluid: true, pointing: true, vertical: true }}
            panes={panes}
          />
        </Segment>
      </Container>
    </main>
  );
}

Dashboard.propType = {
  loggedIn: PropTypes.bool.isRequired,
  businesses: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
    businesses: state.business.data,
    categories: state.category.data
  };
};

export default connect(mapStateToProps)(Dashboard);
