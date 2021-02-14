import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button } from "semantic-ui-react";

function CategoryForm({ activeCategory, createCategory, updateCategory }) {
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (activeCategory) {
      setCategory(activeCategory.name);
    } else {
      setCategory("");
    }
  }, [activeCategory, setCategory]);

  const addCategory = (category) => {
    createCategory(category);
    setCategory("");
  };

  const editCategory = (category) => {
    updateCategory(category);
    setCategory("");
  };

  return (
    <Form
      onSubmit={() =>
        activeCategory
          ? editCategory({ id: activeCategory.id, name: category })
          : addCategory({ name: category })
      }
    >
      <Form.Field>
        <Input
          value={category}
          onInput={(e) => setCategory(e.target.value)}
          placeholder="Add Category"
          action
        >
          <input />
          <Button type="submit">{activeCategory ? "Edit" : "Add"}</Button>
        </Input>
      </Form.Field>
    </Form>
  );
}

CategoryForm.propType = {
  activeCategory: PropTypes.string.isRequired,
  createCategory: PropTypes.func.isRequired,
  updateCategory: PropTypes.func.isRequired
};

export default CategoryForm;
