import React from "react";
import PropTypes from "prop-types";

function Button({ openMenu }) {
  return (
    <div>
      <button type="button" onClick={openMenu} id="btnMenu">
        Открыть меню
      </button>
    </div>
  );
}
Button.propTypes = {
  openMenu: PropTypes.func.isRequired,
};

export default Button;
