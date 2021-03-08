import "./Cards.scss";

import React, { Fragment, useState } from "react";

import ModalInfo from "../modal/Modal";
import { Profile } from "../../models/Profile";

const Card = (props: Profile) => {
  const { name, hover, photo, description } = props;
  const [isOpen, setIsOpen] = useState(false);
  const cardContainer = React.useRef<HTMLDivElement>(null);

  cardContainer.current?.addEventListener("mouseover", (e) => {
    if (cardContainer.current?.classList.contains("card--open")) {
      hover(null);
    } else {
      hover("card");
    }
  });

  cardContainer.current?.addEventListener("mouseleave", (e) => {
    hover(false);
  });

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <Fragment>
      <div ref={cardContainer} className="card" onClick={openModal}>
        <div className="card__content">
          <img src={photo} alt={name} />
          <h3 className="card__title">{name}</h3>
        </div>
      </div>
      <ModalInfo isOpen={isOpen} setIsOpen={setIsOpen}>
       <div className="modal--open">
          <div className="modal__image">
            <img src={photo} alt={name} />
          </div>
         
          <div className="modal__info">
            <h3 className="card__title">{name}</h3>
            <p>{description}</p>
          </div>
       </div>
      </ModalInfo>
    </Fragment>
  );
};

export default Card;
