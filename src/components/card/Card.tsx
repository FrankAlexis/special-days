import './Cards.scss'

import { Profile } from "../../models/Profile";
import React from "react";

const Card = (props: Profile) => {
  const { name, description, hover, photo } = props;

  const cardContainer = React.useRef<HTMLDivElement>(null);

cardContainer.current?.addEventListener('mouseover', (e) => {
  if(cardContainer.current?.classList.contains('card--open')){
    hover(null)
  } else {
    hover('card')
  }
})

cardContainer.current?.addEventListener('mouseleave', (e) => {
  hover(false)
})

  return (
    <div ref={cardContainer} className="card"  >
      <div className="card__content">
        <img src={photo} alt={name}/>
      <h3 className="card__title">{name}</h3>
      </div>
    </div>
  );
};

export default Card;
