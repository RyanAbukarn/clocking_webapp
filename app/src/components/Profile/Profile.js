import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TeamActivities from "../TeamLogs/TeamLogs";
export default function Profile({ isAuthenticated }) {
  // https://reactrouter.com/docs/en/v6/api#usenavigate
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <TeamActivities />
    </div>
  );
}
