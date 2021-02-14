import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Accordion, List, Button } from "semantic-ui-react";

function BusinessList({
  activeBusiness,
  businesses,
  setActiveBusiness,
  deleteBusiness
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (!activeBusiness) setActiveIndex(null);
  }, [activeBusiness, setActiveIndex]);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
    if (setActiveBusiness) {
      setActiveBusiness(businesses[newIndex]);
    }
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
                <a href={business.url} target="blank">
                  {business.url}
                </a>
              }
            />
            {deleteBusiness && (
              <>
                <br />
                <List.Item>
                  <Button
                    color="red"
                    size="small"
                    onClick={() => deleteBusiness(business.id)}
                  >
                    Delete
                  </Button>
                </List.Item>
              </>
            )}
          </List>
        </Accordion.Content>
      </Accordion>
    ))
  );
}

BusinessList.propType = {
  businesses: PropTypes.array.isRequired,
  activeBusiness: PropTypes.object,
  setActiveBusiness: PropTypes.func,
  deleteBusiness: PropTypes.func
};

export default BusinessList;
