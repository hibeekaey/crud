import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Accordion, List, Button } from "semantic-ui-react";

function CategoryList({
  activeCategory,
  categories,
  setActiveCategory,
  deleteCategory
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (!activeCategory) setActiveIndex(null);
  }, [activeCategory, setActiveIndex]);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
    setActiveCategory(categories[newIndex]);
  };

  return (
    categories &&
    categories.map((category, i) => (
      <Accordion key={i} fluid styled>
        <Accordion.Title
          active={activeIndex === i}
          index={i}
          onClick={handleClick}
        >
          {category.name}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === i}>
          <List>
            {deleteCategory && (
              <List.Item>
                <Button
                  color="red"
                  size="small"
                  onClick={() => deleteCategory(category.id)}
                >
                  Delete
                </Button>
              </List.Item>
            )}
          </List>
        </Accordion.Content>
      </Accordion>
    ))
  );
}

CategoryList.propType = {
  categories: PropTypes.array.isRequired,
  activeCategory: PropTypes.object,
  setActiveCategory: PropTypes.func,
  deleteCategory: PropTypes.func
};

export default CategoryList;
