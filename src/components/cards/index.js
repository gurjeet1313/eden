import React from "react";
import SingleIcon from "../../assets/images/single.png";
import GroupIcon from "../../assets/images/group.png";

import { CardContainer } from "./styled";

const Cards = ({ cardListType, cardListTitle, cardListDescription }) => {
  return (
    <CardContainer className="list">
      <figure>
        <img
          src={cardListType === "single" ? SingleIcon : GroupIcon}
          alt="Single Person"
        />
      </figure>
      <h3>{cardListTitle}</h3>
      <p>{cardListDescription} </p>
    </CardContainer>
  );
};

export default Cards;
