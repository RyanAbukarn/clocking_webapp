/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import TeamPanel from "../TeamLogs/TeamLogs";
import Timer from "../Timer";

export default function Profile({ isAuthenticated }) {
  // https://reactrouter.com/docs/en/v6/api#usenavigate
  const navigate = useNavigate();
  const [eventLogData, setEventLogData] = useState();
  const [isLoading, setLoading] = useState(true);

  const userId = JSON.parse(localStorage.userInfo).id;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    } else {
      Axios.get(`http://localhost:3000/api/event?user_id=${userId}`).then(
        (res) => {
          const { data } = res;
          setEventLogData(data);
          setLoading(false)
          
        }
      );
    }
  }, [userId]);

  
  return isLoading ? "Loading profile.." :  (
    <div>
      <Timer eventLogData={eventLogData} userId={userId} />
      <TeamPanel />
    </div>
  );
}
