import React from "react";
import { format } from "date-fns";

function LogCard({ activity }) {
  let value = [];
  let map = new Map([
    ["CLOCKED_IN", "Clocked In"],
    ["CLOCKED_OUT", "Clocked Out"],
  ]);

  if (activity.length === 5) value = [activity[0], activity[3], activity[4]];
  else value = [activity[0], activity[1], activity[2]];

  return (
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <span aria-hidden="true" className="absolute inset-0">
            {value[0]}
          </span>
        </h3>
      </div>
      <p className="text-sm font-medium text-gray-900">{map.get(value[1])}</p>
      <p className="text-sm font-medium text-gray-900">
        {format(new Date(value[2]), "yyyy/MM/dd kk:mm")}
      </p>
    </div>
  );
}
export default LogCard;
