import React, { useState } from "react";
import PropTypes from "prop-types";
import { Accordion } from "semantic-ui-react";

function CategoryList({ categories }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
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
          {category}
        </Accordion.Title>
      </Accordion>
    ))
  );
}

CategoryList.propType = {
  categories: PropTypes.array.isRequired
};

export default CategoryList;
