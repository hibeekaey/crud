import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Accordion, Icon, List, Button, Confirm } from "semantic-ui-react";

function CategoryList({
  activeCategory,
  categories,
  setActiveCategory,
  deleteCategory
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  useEffect(() => {
    if (!activeCategory) setActiveIndex(null);
  }, [activeCategory, setActiveIndex]);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
    setActiveCategory(categories[newIndex]);
  };

  const openConfirm = () => setConfirmOpen(true);
  const closeConfirm = () => setConfirmOpen(false);

  const removeCategory = (id) => {
    deleteCategory(id);
    closeConfirm();
  };

  return (
    <Accordion fluid styled>
      {categories &&
        categories.map((category, i) => (
          <React.Fragment key={i}>
            <Accordion.Title
              active={activeIndex === i}
              index={i}
              onClick={handleClick}
            >
              <Icon name="dropdown" />
              {category.name}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === i}>
              <List>
                {deleteCategory && (
                  <List.Item>
                    <Button
                      color="red"
                      fluid
                      size="small"
                      onClick={openConfirm}
                    >
                      Delete
                    </Button>
                    <Confirm
                      open={confirmOpen}
                      content="Are you sure you want to delete this Category?"
                      confirmButton="Delete"
                      onCancel={closeConfirm}
                      onConfirm={() => removeCategory(category.id)}
                    />
                  </List.Item>
                )}
              </List>
            </Accordion.Content>
          </React.Fragment>
        ))}
    </Accordion>
  );
}

CategoryList.propType = {
  categories: PropTypes.array.isRequired,
  activeCategory: PropTypes.object,
  setActiveCategory: PropTypes.func,
  deleteCategory: PropTypes.func
};

export default CategoryList;
