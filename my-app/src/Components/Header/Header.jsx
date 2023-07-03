import React from "react";

function Header() {
  return (
    <div>
      <div>
        <select>
          <p>Страна</p>
          <option>United States</option>
          <option>Netherlands</option>
          <option>Беларусь</option>
          <option>Россия</option>
          <option>Казахстан</option>
          <option>Türkiye</option>
        </select>
      </div>
      <div>
        <radio>
          <img alt="krestik" src="img/krestik.svg" />
        </radio>
      </div>
    </div>
  );
}

export default Header;
