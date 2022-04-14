import React from "react";
import Logo from "../../assets/images/logo.png";

import { ProgressBarContainer } from "./styled";

const ProgressBar = ({ countVal }) => {
  return (
    <ProgressBarContainer>
      <div className="head-container">
        <figure>
          <img src={Logo} alt="Logo" />
        </figure>
        <h2>Eden</h2>
      </div>
      <ul className={`container${countVal}`}>
        <li className="active">
          <span>1</span>
        </li>
        <li className={countVal >= 2 ? "active" : null}>
          <span>2</span>
        </li>
        <li className={countVal >= 3 ? "active" : null}>
          <span>3</span>
        </li>
        <li className={countVal === 4 ? "active" : null}>
          <span>4</span>
        </li>
      </ul>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
