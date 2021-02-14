import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Message, Button, Dropdown } from "semantic-ui-react";

function BusinessForm({
  activeBusiness,
  createBusiness,
  updateBusiness,
  setActiveBusiness,
  options
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("");
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [formError, setFormError] = useState(false);

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

  const addBusiness = async (business) => {
    setFormError(false);
    try {
      await createBusiness(business);
      clearForm();
    } catch (e) {
      setFormError(true);
    }
  };

  const editCategory = async (category) => {
    setFormError(false);
    try {
      await updateBusiness(category);
      clearForm();
    } catch (e) {
      setFormError(true);
    }
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

  const mappedOptions = options.map((category) => ({
    key: category.name.toLowerCase(),
    text: category.name,
    value: category.name.toLowerCase()
  }));

  return (
    <div style={{ backgroundColor: "#f5f5f5", padding: "10px 0" }}>
      {formError && (
        <Message error size="small">
          Please check details.
        </Message>
      )}
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
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input
              type="text"
              value={description}
              onInput={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
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
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Url</label>
            <input
              type="url"
              value={url}
              onInput={(e) => setUrl(e.target.value)}
              placeholder="Url"
              required
            />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Category</label>
            <Dropdown
              placeholder="Category"
              multiple
              selection
              options={mappedOptions}
              value={categories}
              onChange={(e, { value }) => setCategories(value)}
              required
            />
          </Form.Field>
        </Form.Group>
        <div className="ui two buttons">
          <Button color="green" basic type="submit">
            {activeBusiness ? "Edit" : "Add"}
          </Button>
          <br />
          <Button color="red" type="reset" onClick={() => clearForm()}>
            Clear
          </Button>
        </div>
      </Form>
    </div>
  );
}

BusinessForm.propType = {
  activeBusiness: PropTypes.string.isRequired,
  createBusiness: PropTypes.func.isRequired,
  updateBusiness: PropTypes.func.isRequired,
  setActiveBusiness: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default BusinessForm;
