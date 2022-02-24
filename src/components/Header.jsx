import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="punkLogo"
          src="/assets/header/cryptopunk-logo.png"
          alt=""
        />
      </div>
      <div className="searchBar">
        <img src="/assets/header/search.png" alt="" />
        <input
          type="text"
          placeholder="Collection, item or user ..."
          className="searchInput"
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <img src="/assets/header/theme-switch.png" alt="" />
      </div>
      <div className="loginButton">GET IN</div>
    </div>
  );
};

export default Header;
