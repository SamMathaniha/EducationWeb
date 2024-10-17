import React from "react";
import "./Header.css";
import Logo from "../../assets/logo/LogoHead.PNG";

const Header = () => {
  return (
    <div className="headBox">
      <div className="logo">
        <img src={Logo} alt="Sam_Institute" />
      </div>
      <div className="menuList">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact us</li>
      </div>
      <div className="FreeBtn">
        <button>Try For Free</button>
      </div>
    </div>
  );
};

export default Header;
