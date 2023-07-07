/* eslint-disable import/no-unresolved */
import React from "react";
import PropTypes from "prop-types";
import SelectLang from "./Select/SelectLang";
import "./Header.css";

function Header({ onClose }) {
  return (
    <div className="header">
      <SelectLang />
      <div>
        <radio onClick={onClose} style={{ cursor: "pointer" }}>
          <img alt="krestik" src="img/krestik.svg" />
        </radio>
      </div>
    </div>
  );
}

Header.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Header;
