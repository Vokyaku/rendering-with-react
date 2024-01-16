import React from "react";
import "./HobbyList.css";

function HobbyList(props) {
  const { hobbies } = props;

  if (hobbies.length === 0) {
    return null;
  }
  
  return (
  <div className="hobbies">
      <h4>Hobbies</h4>
      <ul>
        {hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
        ))}
      </ul>
      </div>
    );
}

export default HobbyList;