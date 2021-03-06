import "./Cards.scss";

import Card from "./Card";
import { Profile } from "../../models/Profile";
import React from "react";

const CardList = (props: any) => {
  const { data } = props;
  return (
    <div className="card-list-container">
      {data.map((profile: Profile, index: number) => (
        <div className="column">
          <Card key={index} {...profile}></Card>
        </div>
      ))}
    </div>
  );
};

export default CardList;
