import React from "react";
import "./Activity.css";

function Activity(props) {
  const { time, description } = props;
  
  return (
  <div className="activity">
       <p>
         {time} 
         <span> {description} </span>
      </p>
</div>
  );
}

export default Activity;