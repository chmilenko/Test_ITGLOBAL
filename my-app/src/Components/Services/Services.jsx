import React, { useState } from "react";
// eslint-disable-next-line import/no-cycle
import Calculations from "../Calculations/Calculations";
// eslint-disable-next-line import/no-cycle
import Main from "../Main/Main";

function Services() {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  const handleOpenServers = () => {
    setOpen((prev) => !prev);
  };

  const handleCloseServers = () => {
    setClose((prev) => !prev);
  };
  let content;
  if (open) {
    content = <Calculations />;
  } else if (close) {
    content = <Main />;
  } else {
    content = (
      <>
        <div>
          <p>
            <radio onClick={handleCloseServers}>
              <img alt="strelkaBack" src="img/strelkaBack.svg" />
            </radio>
            Services
          </p>
        </div>
        <hr />
        <div>
          <div>
            <p>
              Облачные вычисления
              <radio onClick={handleOpenServers}>
                <img alt="strelka" src="img/strelka.svg" />
              </radio>
            </p>
          </div>
          <div>
            <p>
              Выделенные серверы
              <img alt="strelka" src="img/strelka.svg" />
            </p>
          </div>
          <div>
            <p>
              Платформенные серверы
              {" "}
              <img alt="strelka" src="img/strelka.svg" />
            </p>
          </div>
          <div>
            <p>
              Информационная безопасность
              {" "}
              <img alt="strelka" src="img/strelka.svg" />
            </p>
          </div>
        </div>
      </>
    );
  }
  return (
    <div>{content}</div>
  );
}

export default Services;
