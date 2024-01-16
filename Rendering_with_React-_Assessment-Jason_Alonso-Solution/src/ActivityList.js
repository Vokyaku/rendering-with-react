import React from "react";
import "./ActivityList.css";
import Activity from "./Activity";

function ActivityList(props) {
  const { activities } = props;
  
  return (
  <div className="activity-list">
      {activities.map((activity, index) => (
        <Activity
          key={index}
          time={activity.time}
          description={activity.description}
        />
      ))}
      </div>
  );
}

export default ActivityList;