import "./Header.scss";

import React from "react";

const Header = (props: any) => {
  return (
    <header className="header-container">
      <div>EXPE</div>
      <nav className="header-container__elements">
        <p>FRASES</p>
        <p>COMPAÑERAS</p>
      </nav>
    </header>
  );
};

export default Header;
