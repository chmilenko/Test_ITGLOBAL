import React, { useState } from "react";
import Services from "../Services/Services";

function Main() {
  const [open, setOpen] = useState(false);

  const handleOpenServices = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      {open ? (
        <Services />
      ) : (
        <>
          <div>
            <div>
              <p>
                Services
                {" "}
                <radio onClick={handleOpenServices}>
                  <img alt="strelka" src="img/strelka.svg" />
                </radio>
              </p>
            </div>
            <div>
              <p>
                Managet IT
                {" "}
                <img alt="strelka" src="img/strelka.svg" />
              </p>
            </div>
            <div>
              <p>
                Telecom Solutions
                {" "}
                <img alt="strelka" src="img/strelka.svg" />
              </p>
            </div>
            <div>
              <p>
                About us
                {" "}
                <img alt="strelka" src="img/strelka.svg" />
              </p>
            </div>
          </div>
          <div>
            <p>Контакты</p>
            <p>Поиск</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Main;
