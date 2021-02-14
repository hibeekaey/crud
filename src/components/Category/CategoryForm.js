import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Message, Button } from "semantic-ui-react";

function CategoryForm({
  activeCategory,
  createCategory,
  updateCategory,
  setActiveCategory
}) {
  const [category, setCategory] = useState("");
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    if (activeCategory) {
      setCategory(activeCategory.name);
    } else {
      setCategory("");
    }
  }, [activeCategory, setCategory]);

  const addCategory = async (category) => {
    setFormError(false);
    try {
      await createCategory(category);
      clearForm();
    } catch (e) {
      setFormError(true);
    }
  };

  const editCategory = async (category) => {
    setFormError(false);
    try {
      await updateCategory(category);
      clearForm();
    } catch (e) {
      setFormError(true);
    }
  };

  const clearForm = () => {
    setActiveCategory(null);
    setCategory("");
  };

  return (
    <>
      {formError && (
        <Message error size="small">
          Please check details.
        </Message>
      )}
      <Form
        onSubmit={() =>
          activeCategory
            ? editCategory({ id: activeCategory.id, name: category })
            : addCategory({ name: category })
        }
      >
        <Form.Field>
          <label>Category</label>
          <input
            type="text"
            value={category}
            onInput={(e) => setCategory(e.target.value)}
            placeholder="Category"
            required
          />
        </Form.Field>
        <div className="ui two buttons">
          <Button color="green" basic type="submit">
            {activeCategory ? "Edit" : "Add"}
          </Button>
          <br />
          <Button color="red" type="reset" onClick={() => clearForm()}>
            Clear
          </Button>
        </div>
      </Form>
    </>
  );
}

CategoryForm.propType = {
  activeCategory: PropTypes.string.isRequired,
  createCategory: PropTypes.func.isRequired,
  updateCategory: PropTypes.func.isRequired,
  setActiveCategory: PropTypes.func.isRequired
};

export default CategoryForm;
