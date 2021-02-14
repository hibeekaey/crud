import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";

function BusinessForm({
  activeBusiness,
  createBusiness,
  updateBusiness,
  setActiveBusiness
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("");
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (activeBusiness) {
      setName(activeBusiness.name);
      setDescription(activeBusiness.description);
      setPhone(activeBusiness.phone);
      setUrl(activeBusiness.url);
      setCategories(activeBusiness.categories);
      setImages(activeBusiness.images);
    } else {
      setName("");
      setDescription("");
      setPhone("");
      setUrl("");
      setCategories([]);
      setImages([]);
    }
  }, [
    activeBusiness,
    setName,
    setDescription,
    setPhone,
    setUrl,
    setCategories,
    setImages
  ]);

  const addBusiness = (business) => {
    createBusiness(business);
    clearForm();
  };

  const editCategory = (category) => {
    updateBusiness(category);
    clearForm();
  };

  const clearForm = () => {
    setActiveBusiness(null);
    setName("");
    setDescription("");
    setPhone("");
    setUrl("");
    setCategories([]);
    setImages([]);
  };

  return (
    <Form
      onSubmit={() =>
        activeBusiness
          ? editCategory({
              id: activeBusiness.id,
              name,
              description,
              phone,
              url,
              categories,
              images
            })
          : addBusiness({ name, description, phone, url, categories, images })
      }
    >
      <Form.Group widths="equal">
        <Form.Field>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onInput={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onInput={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field>
          <label>Phone</label>
          <input
            type="tel"
            value={phone}
            onInput={(e) => setPhone(e.target.value)}
            placeholder="Phone"
          />
        </Form.Field>
        <Form.Field>
          <label>Url</label>
          <input
            type="url"
            value={url}
            onInput={(e) => setUrl(e.target.value)}
            placeholder="Url"
          />
        </Form.Field>
      </Form.Group>
      <Button color="blue" fluid type="submit">
        {activeBusiness ? "Edit" : "Add"}
      </Button>
      <br />
      <Button color="red" fluid type="reset" onClick={() => clearForm()}>
        Clear
      </Button>
    </Form>
  );
}

BusinessForm.propType = {
  activeBusiness: PropTypes.string.isRequired,
  createBusiness: PropTypes.func.isRequired,
  updateBusiness: PropTypes.func.isRequired,
  setActiveBusiness: PropTypes.func.isRequired
};

export default BusinessForm;
