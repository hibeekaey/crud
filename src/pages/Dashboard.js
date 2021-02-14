import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Container,
  Segment,
  Input,
  Tab,
  Button
} from "semantic-ui-react";
import { BusinessForm, BusinessList } from "../components/Business";
import { CategoryForm, CategoryList } from "../components/Category";
import {
  setActiveBusiness,
  createBusiness,
  updateBusiness,
  deleteBusiness,
  setActiveCategory,
  createCategory,
  updateCategory,
  deleteCategory
} from "../actions";

function Dashboard({
  loggedIn,
  businesses,
  categories,
  activeBusiness,
  setActiveBusiness,
  createBusiness,
  updateBusiness,
  deleteBusiness,
  activeCategory,
  setActiveCategory,
  createCategory,
  updateCategory,
  deleteCategory
}) {
  const history = useHistory();

  useEffect(() => {
    if (!loggedIn) history.push("/login");
  }, [loggedIn, history]);

  const panes = [
    {
      menuItem: "Business",
      render: () => (
        <>
          <Input fluid action="Search" placeholder="Search Business...">
            <input />
            <Button color="primary" type="submit">
              Search
            </Button>
          </Input>
          <br />
          <Grid columns={2}>
            <Grid.Column mobile={16} computer={8}>
              <BusinessList
                activeBusiness={activeBusiness}
                businesses={businesses}
                setActiveBusiness={setActiveBusiness}
                deleteBusiness={deleteBusiness}
              />
            </Grid.Column>
            <Grid.Column mobile={16} computer={8}>
              <BusinessForm
                activeBusiness={activeBusiness}
                createBusiness={createBusiness}
                updateBusiness={updateBusiness}
                setActiveBusiness={setActiveBusiness}
              />
            </Grid.Column>
          </Grid>
        </>
      )
    },
    {
      menuItem: "Category",
      render: () => (
        <>
          <Input fluid action="Search" placeholder="Search Category...">
            <input />
            <Button color="primary" type="submit">
              Search
            </Button>
          </Input>
          <br />
          <Grid columns={2}>
            <Grid.Column mobile={16} computer={8}>
              <CategoryList
                activeCategory={activeCategory}
                categories={categories}
                setActiveCategory={setActiveCategory}
                deleteCategory={deleteCategory}
              />
            </Grid.Column>
            <Grid.Column mobile={16} computer={8}>
              <CategoryForm
                activeCategory={activeCategory}
                createCategory={createCategory}
                updateCategory={updateCategory}
                setActiveCategory={setActiveCategory}
              />
            </Grid.Column>
          </Grid>
        </>
      )
    }
  ];

  return (
    <main>
      <Container>
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
  activeBusiness: PropTypes.object.isRequired,
  setActiveBusiness: PropTypes.func.isRequired,
  updateBusiness: PropTypes.func.isRequired,
  deleteBusiness: PropTypes.func.isRequired,
  businesses: PropTypes.array.isRequired,
  activeCategory: PropTypes.object.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
  updateCategory: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
    activeBusiness: state.business.activeBusiness,
    businesses: state.business.data,
    activeCategory: state.category.activeCategory,
    categories: state.category.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveBusiness: (business) => dispatch(setActiveBusiness(business)),
    createBusiness: (business) => dispatch(createBusiness(business)),
    updateBusiness: (business) => dispatch(updateBusiness(business)),
    deleteBusiness: (id) => dispatch(deleteBusiness(id)),
    setActiveCategory: (category) => dispatch(setActiveCategory(category)),
    createCategory: (category) => dispatch(createCategory(category)),
    updateCategory: (category) => dispatch(updateCategory(category)),
    deleteCategory: (id) => dispatch(deleteCategory(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
