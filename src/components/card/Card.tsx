import './Cards.scss'

import { Profile } from "../../models/Profile";
import React from "react";

const Card = (props: Profile) => {
  const { name, description } = props;
  return (
    <div className="card">
      <h3 className="card__title">{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
