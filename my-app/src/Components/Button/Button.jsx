import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

function Button({ onOpen }) {
  return (
    <button
      onClick={onOpen}
      type="button"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      Открыть меню
    </button>
  );
}
Button.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default Button;
