import React from "react";
function LogCard({ activity }) {
  return (
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <span aria-hidden="true" className="absolute inset-0"></span>
          {activity.full_name}
        </h3>
      </div>
      <p className="text-sm font-medium text-gray-900">{activity.clock_in}</p>
      <p className="text-sm font-medium text-gray-900">{activity.clock_out}</p>
    </div>
  );
}
export default LogCard;
