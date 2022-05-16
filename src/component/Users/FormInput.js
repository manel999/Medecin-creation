import Card from "../UI/Card";
import React, { useState } from "react";
import classes from "./FormInput.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function FormInput(props) {
  const { onChange, onBlur, errorMessage, id, ...inputprops } = props;
  const [focused, setOnFocused] = useState(false);

  function errorHandler() {
    setError(null);
  }

  function focusHandler(event) {
    setOnFocused(true);
  }

  return (
    <div>
      <input
        {...inputprops}
        onChange={onChange}
        onBlur={focusHandler}
        focused={focused.toString()}
      ></input>
      <span>{errorMessage}</span>
    </div>
  );
}

export default FormInput;
