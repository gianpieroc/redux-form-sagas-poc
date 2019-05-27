import React from "react";

const Input = ({ input, name, label = "", meta, ...props }) => (
  <div className="column">
    <div className="input-container">
      <label>{label}</label>
      <input {...props} {...input} />
    </div>
    <span className="error">
      {(meta.touched && meta.error) ? meta.error : ""}
    </span>
  </div>
);

export default Input;
