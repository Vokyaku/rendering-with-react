import React from "react";
import "./Header.css";

function Header(props) {
  const { name, imageSrc, birthday } = props;
  
  return (
  <div className="Header">
      <img src={imageSrc} alt="Profile" />
      <h1>{name}</h1>
      <p>Birthday: {birthday}</p>
      </div>
  );
}

export default Header;