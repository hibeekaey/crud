import React from "react";
import { Form } from "semantic-ui-react";

const RenderField = (field) => (
  <div className="form">
    <Form.Input {...field.input} {...field} />
    {field.meta.touched && field.meta.error && (
      <span className="error">{field.meta.error}</span>
    )}
  </div>
);

export default RenderField;
