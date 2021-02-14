import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Accordion, List, Label, Button, Confirm } from "semantic-ui-react";

function BusinessList({
  activeBusiness,
  businesses,
  setActiveBusiness,
  deleteBusiness
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

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

  const openConfirm = () => setConfirmOpen(true);
  const closeConfirm = () => setConfirmOpen(false);

  const removeBusiness = (id) => {
    deleteBusiness(id);
    closeConfirm();
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
            <List.Item>
              <Label.Group color="blue">
                {business.categories &&
                  business.categories.map((category) => (
                    <Label as="a">{category}</Label>
                  ))}
              </Label.Group>
            </List.Item>
            {deleteBusiness && (
              <List.Item>
                <Button color="red" size="small" onClick={openConfirm}>
                  Delete
                </Button>
                <Confirm
                  open={confirmOpen}
                  content="Are you sure you want to delete this Business?"
                  confirmButton="Delete"
                  onCancel={closeConfirm}
                  onConfirm={() => removeBusiness(business.id)}
                />
              </List.Item>
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
