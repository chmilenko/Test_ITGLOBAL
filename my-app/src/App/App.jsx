import React, { useState } from "react";
import "./App.css";
import Main from "../Components/Main/Main";
import Header from "../Components/Header/Header";
import Button from "../Components/Button/Button";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen((prev) => !prev);
    const btn = document.getElementById("btnMenu");
    btn.display = "none";
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button openMenu={handleOpenMenu} />
      {open ? (
        <div>
          <Header />
          <Main />
          <button type="button" onClick={handleCloseMenu}>
            Закрыть меню
          </button>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default App;
