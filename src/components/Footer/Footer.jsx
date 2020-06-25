import React from "react";
import "../../assets/styles/components/Footer.scss";
import { Copyright } from "../../utils/constants/footerInfo.json";

const Footer = () => {
  return (
    <footer>
      <div className="container text-center">
        <div className="row">
          <p>{Copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
