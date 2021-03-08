import "./Footer.scss";

import React, {useState} from "react";
import cena from '../../assets/images/cena.jpg';

const Footer = (props: any) => {
  const { id } = props;
  const [modal, setModal] = useState(false)
  return (
    <footer className="footer-container" id={id}>
      <button type="button" className="gift-card" onClick={() => setModal(!modal)}>
        <img src="https://s3.amazonaws.com/cdn.experimentality.co/Imagenes/giftCard.png" alt="gift card"/>
      </button>
      <div className={`gift-card__modal ${modal ? 'gift-card__modal--active' : ''}`}>
        <div className="gift-card__modal__overlay" onClick={() => setModal(!modal)}/>
        <div className="gift-card__content">
          <div className="gift-card__content__image">
            <img src={cena} alt="cena" />
          </div>
          <div className="gift-card__content__text">
            <p>
              No necesitas un día para que reconozcamos tu valor,
            pero es una excusa encantadora para recordarte lo poderosa,
            especial y valiente que eres.

            Es por eso que todos tus compañeros...
            </p>
          <h3 className="gift-card__content__title">Te regalamos una cena</h3>
          <p className="gift-card__content__subtitle">Para que celebres esa grandeza que tienes por ser mujer</p>
          <a href="https://experimentality.slack.com/archives/C01QKTL7ERH" rel="noreferrer" target="_blank">{`*Para más detalles pregunta aquí ;)`}</a>
          </div>
        </div>
          <button className="close-button" onClick={() => setModal(!modal)} >X</button>
      </div>
    </footer>
  );
};

export default Footer;
