import "./Footer.scss";

import React from "react";

const Footer = (props: any) => {
  const { id } = props;
  return (
    <footer className="footer-container" id={id}>
      <a href="https://www.experimentality.co">
        <img
          alt="logo"
          src="https://www.experimentality.co/wp-content/uploads/2017/04/footerlogo.png"
        />
      </a>
    </footer>
  );
};

export default Footer;
