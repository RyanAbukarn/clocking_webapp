import React, { useEffect, useState } from "react";
import Axios from "axios";
import ActivityCard from "./LogCard";
function TeamLogs() {
  const [activities, setActivities] = useState([]);
  function loadActivities() {
    let userID = JSON.parse(localStorage.userInfo).id;
    Axios.get(`http://localhost:3000/api/user/team`, {
      params: {
        userID: userID,
      },
    }).then((res) => {
      console.log(res.data);

      setActivities(res.data);
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
