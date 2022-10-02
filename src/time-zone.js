import React, { useState } from "react";
import moment from "moment-timezone";

function TimeZone() {
  const [timeSelected, changeTimeSelected] = useState("");

  const changeTheTime = () => {
    changeTimeSelected(moment.tz("Asia/Tokyo").format());
  };

  return (
    <div>
      <div>
        <p>Select the time</p>
        <input
          type="time"
          onChange={(e) => {
            changeTimeSelected(e.target.value);
          }}
        />
      </div>
      <button onClick={changeTheTime}>Change</button>
      <p>Time : {timeSelected}</p>
    </div>
  );
}

export default TimeZone;
