import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Grid, Container, Segment, Form, Input, Tab } from "semantic-ui-react";
import { BusinessForm, BusinessList } from "../components/Business";
import { CategoryForm, CategoryList } from "../components/Category";
import {
  setActiveBusiness,
  createBusiness,
  editBusiness,
  deleteBusiness,
  setActiveCategory,
  createCategory,
  editCategory,
  deleteCategory
} from "../actions";

function Dashboard({
  loggedIn,
  businesses,
  categories,
  activeBusiness,
  setActiveBusiness,
  createBusiness,
  editBusiness,
  deleteBusiness,
  activeCategory,
  setActiveCategory,
  createCategory,
  editCategory,
  deleteCategory
}) {
  const [businessSearch, setBusinessSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const [filteredBusinesses, setFilteredBusinesses] = useState(businesses);
  const [filteredCategories, setFilteredCategories] = useState(categories);

  const history = useHistory();

  useEffect(() => {
    if (!loggedIn) history.push("/login");

    if (businesses) {
      const regex = new RegExp(businessSearch.trim(), "gi");
      const filteredBusinesses = businesses.filter(
        (business) =>
          business.name.match(regex) || business.description.match(regex)
      );

      setFilteredBusinesses(filteredBusinesses);
    }

    if (categories) {
      const regex = new RegExp(categorySearch.trim(), "gi");
      const filteredCategories = categories.filter((category) =>
        category.name.match(regex)
      );

      setFilteredCategories(filteredCategories);
    }
  }, [
    loggedIn,
    businessSearch,
    businesses,
    setFilteredBusinesses,
    categorySearch,
    categories,
    setFilteredCategories,
    history
  ]);

  const panes = [
    {
      menuItem: "Businesses",
      render: () => (
        <Grid reversed="tablet vertically" columns={2}>
          <Grid.Column mobile={16} computer={8}>
            <Form>
              <Form.Field>
                <label>Search Business</label>
                <Input
                  fluid
                  icon={{
                    name: "close",
                    circular: true,
                    link: true,
                    onClick: () => setBusinessSearch("")
                  }}
                  value={businessSearch}
                  onInput={(e) => setBusinessSearch(e.target.value)}
                  placeholder="Search Business"
                />
              </Form.Field>
            </Form>

            <br />
            <BusinessList
              activeBusiness={activeBusiness}
              businesses={filteredBusinesses}
              setActiveBusiness={setActiveBusiness}
              deleteBusiness={deleteBusiness}
            />
          </Grid.Column>
          <Grid.Column mobile={16} computer={8}>
            <BusinessForm
              activeBusiness={activeBusiness}
              createBusiness={createBusiness}
              updateBusiness={editBusiness}
              setActiveBusiness={setActiveBusiness}
              options={categories}
            />
          </Grid.Column>
        </Grid>
      )
    },
    {
      menuItem: "Categories",
      render: () => (
        <Grid reversed="tablet vertically" columns={2}>
          <Grid.Column mobile={16} computer={8}>
            <Form>
              <Form.Field>
                <label>Search Category</label>
                <Input
                  fluid
                  icon={{
                    name: "close",
                    circular: true,
                    link: true,
                    onClick: () => setCategorySearch("")
                  }}
                  value={categorySearch}
                  onInput={(e) => setCategorySearch(e.target.value)}
                  placeholder="Search Category"
                />
              </Form.Field>
            </Form>
            <br />
            <CategoryList
              activeCategory={activeCategory}
              categories={filteredCategories}
              setActiveCategory={setActiveCategory}
              deleteCategory={deleteCategory}
            />
          </Grid.Column>
          <Grid.Column mobile={16} computer={8}>
            <CategoryForm
              activeCategory={activeCategory}
              createCategory={createCategory}
              updateCategory={editCategory}
              setActiveCategory={setActiveCategory}
            />
          </Grid.Column>
        </Grid>
      )
    }
  ];

  return (
    <main>
      <Container>
        <Segment as="section" basic vertical>
          <Tab
            menu={{
              fluid: true,
              pointing: true,
              secondary: true,
              vertical: true
            }}
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
  editBusiness: PropTypes.func.isRequired,
  deleteBusiness: PropTypes.func.isRequired,
  businesses: PropTypes.array.isRequired,
  activeCategory: PropTypes.object.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
  editCategory: PropTypes.func.isRequired,
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
    editBusiness: (business) => dispatch(editBusiness(business)),
    deleteBusiness: (id) => dispatch(deleteBusiness(id)),
    setActiveCategory: (category) => dispatch(setActiveCategory(category)),
    createCategory: (category) => dispatch(createCategory(category)),
    editCategory: (category) => dispatch(editCategory(category)),
    deleteCategory: (id) => dispatch(deleteCategory(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
