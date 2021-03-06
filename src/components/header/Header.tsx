import "./Header.scss";

import React from "react";

const Header = (props: any) => {
  const handlerScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  };
  return (
    <header className="header-container">
      <div>EXPE</div>
      <nav className="header-container__elements">
        <p className="header-container__elements_option" onClick={() => handlerScroll("#phasesSection")}>FRASES</p>
        <p className="header-container__elements_option" onClick={() => handlerScroll("#matesSection")}>COMPAÑERAS</p>
      </nav>
    </header>
  );
};

export default Header;
