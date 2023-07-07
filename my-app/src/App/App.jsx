/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import cn from "classnames";
import styles from "./App.module.css";
import { items } from "./menuData";
import Header from "../Components/Header/Header";
import Button from "../Components/Button/Button";

function App() {
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState(1);
  const [currentMenu, setCurrentMenu] = useState([items]);

  const handleOpenMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  // eslint-disable-next-line no-shadow
  const selectLevel = (level, items) => {
    if (!items) {
      return;
    }
    setLevel(level);
    setCurrentMenu((l) => {
      // eslint-disable-next-line no-param-reassign
      l[level] = items;
      return l;
    });
  };

  const backLevel = () => {
    setLevel(level - 1);
    setCurrentMenu((l) => {
      // eslint-disable-next-line no-param-reassign
      l[level] = [];
      return l;
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      backLevel();
      selectLevel();
    }
  };

  return (
    <>
      <Button
        onOpen={handleOpenMenu}
        type="button"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Открыть меню
      </Button>
      <nav className={styles.menu} role="navigation">
        <div
          className={cn(styles.mobileMenuBox, {
            [styles.mobileMenuBoxShow]: open,
          })}
        >
          <div className={styles.menuHeader}>
            <Header onClose={handleCloseMenu} />
          </div>
          <div
            className={styles.level}
            style={{
              transform: `translateX(calc(-100% * ${level - 1} - 24px * ${
                level - 1
              }))`,
            }}
          >
            {currentMenu.map((item, index) => (
              <div key={index}>
                {item.map((m, index) => (
                  <div key={index}>
                    {m.nameBack && (
                      <div className={styles.nameBack}>
                        <radio>
                          <img
                            alt="back"
                            src="/img/strelkaBack.svg"
                            onClick={backLevel}
                            role="button"
                            tabIndex={0}
                            onKeyDown={handleKeyDown}
                          />
                        </radio>
                        <div style={{ marginLeft: "3px" }}>{m.nameBack}</div>
                      </div>
                    )}
                    {m.children ? (
                      <div className={styles.name}>
                        {m.name}
                        <img
                          alt="strelka"
                          src="/img/strelka.svg"
                          role="button"
                          tabIndex={0}
                          onKeyDown={handleKeyDown}
                          onClick={() => selectLevel(level + 1, m.children)}
                        />
                      </div>
                    ) : (
                      <div className={styles.name}>{m.name}</div>
                    )}
                    {m.description && (
                      <p className={styles.description}>{m.description}</p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
