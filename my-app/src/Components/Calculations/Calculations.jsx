import React, { useState } from "react";
// eslint-disable-next-line import/no-cycle
import Services from "../Services/Services";

function Calculations() {
  const [close, setClose] = useState(false);

  const handleCloseServers = () => {
    setClose((prev) => !prev);
  };

  return (
    <div>
      {close ? (
        <Services />
      ) : (
        <>
          <div>
            <p>
              <radio onClick={handleCloseServers}>
                <img alt="strelkaBack" src="img/strelkaBack.svg" />
              </radio>
              Облачные вычисления
            </p>
          </div>
          <hr />
          <div>
            <h5>Cloud consulting</h5>
            <p>
              Relational database services for MySQL, PostgreSQL, and SQL
              server.
            </p>
            <h5>Cloud infrastructure analytics</h5>
            <p>Health-specific solutions to enhance the patient experience.</p>
            <h5>Hybrid Cloud</h5>
            <p>
              Data storage, AI, and analytics solutions for government agencies.
            </p>
            <h5>Hybrid Cloud</h5>
            <p>
              Data storage, AI, and analytics solutions for government agencies.
            </p>
            <h5>Multicloud</h5>
            <p>
              Relational database services for MySQL, PostgreSQL, and SQL
              server.
            </p>
            <h5>Cloud consulting</h5>
            <p>
              Relational database services for MySQL, PostgreSQL, and SQL
              server.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Calculations;
