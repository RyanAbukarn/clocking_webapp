import React, { useEffect, useState } from "react";
import Axios from "axios";
import ActivityCard from "./LogCard";
import { matchRoutes } from "react-router-dom";
function TeamLogs() {
  const [activities, setActivities] = useState([]);

  function loadActivities() {
    let userID = JSON.parse(localStorage.userInfo).id;
    Axios.get(`http://localhost:3000/api/user/team`, {
      params: {
        userID: userID,
      },
    }).then((res) => {
      let map = new Map();
      res.data.forEach((value) => {
        if (map.has(value.id)) {
          map.get(value.id).push(value.event, value.timestamp);
        } else {
          map.set(value.id, [value.full_name, value.event, value.timestamp]);
        }
      });
      setActivities(Array.from(map.values()));
    });
  }
  useEffect(() => {
    loadActivities();
  }, []);
  return (
    <div className="">
      {activities.map((value, index) => (
        <ActivityCard key={index} activity={value} />
      ))}
    </div>
  );
}
export default TeamLogs;
