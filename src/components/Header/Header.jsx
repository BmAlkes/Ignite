import React from "react";
import "./styles.css";
import igniteLogo from "../../assests/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={igniteLogo} alt="logo site" />
    </header>
  );
};

export default Header;
