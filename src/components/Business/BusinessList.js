import React, { useState } from "react";
import PropTypes from "prop-types";
import { List, Card, Image, Label, Button, Confirm } from "semantic-ui-react";

function BusinessList({
  activeBusiness,
  businesses,
  setActiveBusiness,
  deleteBusiness
}) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleClick = (index) => {
    if (setActiveBusiness) {
      setActiveBusiness(businesses[index]);
    }
  };

  const openConfirm = () => setConfirmOpen(true);
  const closeConfirm = () => setConfirmOpen(false);

  const removeBusiness = (id) => {
    deleteBusiness(id);
    closeConfirm();
  };

  return (
    <Card.Group>
      {businesses &&
        businesses.map((business, i) => (
          <Card fluid={deleteBusiness} key={i}>
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              wrapped
              ui={false}
            />

            <Card.Content>
              <Card.Header>{business.name}</Card.Header>
              <br />
              <Card.Meta>
                <List>
                  <List.Item
                    icon="phone"
                    content={
                      <a href={`tel:${business.phone}`}>{business.phone}</a>
                    }
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
                        business.categories.map((category, i) => (
                          <Label key={i} as="a">
                            {category}
                          </Label>
                        ))}
                    </Label.Group>
                  </List.Item>
                </List>
              </Card.Meta>
              <Card.Description>{business.description}</Card.Description>
            </Card.Content>

            {deleteBusiness && (
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green" onClick={() => handleClick(i)}>
                    Edit
                  </Button>
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
                </div>
              </Card.Content>
            )}
          </Card>
        ))}
    </Card.Group>
  );
}

BusinessList.propType = {
  businesses: PropTypes.array.isRequired,
  activeBusiness: PropTypes.object,
  setActiveBusiness: PropTypes.func,
  deleteBusiness: PropTypes.func
};

export default BusinessList;
