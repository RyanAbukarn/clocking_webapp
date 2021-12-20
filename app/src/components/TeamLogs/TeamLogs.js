import React, { useEffect, useState } from "react";
import Axios from "axios";
import ActivityCard from "./LogCard";
import getFormattedEvents from "../../utils/getFormattedEvents";
import { Container } from "react-bootstrap";
function TeamLogs() {
  const [activities, setActivities] = useState([]);

  function loadActivities() {
    let userID = JSON.parse(localStorage.userInfo).id;
    Axios.get(`http://localhost:3000/api/user/team`, {
      params: {
        userID: userID,
      },
    }).then((res) => {
      const data = res.data || [];
      const formattedData = getFormattedEvents(data);

      let map = new Map();
      (Object.values(formattedData)).forEach((value) => {
          map.set(value.userId, value);
      });
      
      setActivities(Array.from(map.values()));
    });
  }
  useEffect(() => {
    loadActivities();
  }, []);
  return (
    <Container className="mt-4">
      {activities.map((value, index) => (
        <ActivityCard key={index} activity={value} />
      ))}
    </Container>
  );
}
export default TeamLogs;
