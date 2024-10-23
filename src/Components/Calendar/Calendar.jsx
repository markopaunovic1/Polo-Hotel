import React from "react";
import { useState } from "react";
import ReactCalendar from "react-calendar";

function Calendar() {
   // const [value, onChange] = useState<valueer>(new Date());

    return (
        <div className="calendar">
            <ReactCalendar minDate={new Date()} onClickDay={(date) => console.log(date)}/>
        </div>
    )
}

export default Calendar;