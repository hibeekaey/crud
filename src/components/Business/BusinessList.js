import React, { useState } from "react";
import PropTypes from "prop-types";
import { Accordion, List } from "semantic-ui-react";

function BusinessList({ businesses }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    businesses &&
    businesses.map((business, i) => (
      <Accordion key={i} fluid styled>
        <Accordion.Title
          active={activeIndex === i}
          index={i}
          onClick={handleClick}
        >
          {business.name}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === i}>
          <List>
            <List.Item icon="tint" content={business.description} />
            <List.Item
              icon="phone"
              content={<a href={`tel:${business.phone}`}>{business.phone}</a>}
            />
            <List.Item
              icon="linkify"
              content={
                <a href={`https://${business.url}`} target="blank">
                  {business.url}
                </a>
              }
            />
          </List>
        </Accordion.Content>
      </Accordion>
    ))
  );
}

BusinessList.propType = {
  businesses: PropTypes.array.isRequired
};

export default BusinessList;
