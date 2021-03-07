import "./Cards.scss";

import Card from "./Card";
import { Profile } from "../../models/Profile";
import React from "react";

const CardList = (props: any) => {
  const { data, hover } = props;
  return (
    <div className="card-list-container">
      {data.map((profile: Profile, index: number) => (
          <Card key={index} {...profile} hover={hover} ></Card>
      ))}
    </div>
  );
};

export default CardList;
