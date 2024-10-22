import React from "react";
import { useState } from "react";
import ReactCalendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const valuePiece = Date();

const valueer = valuePiece;

function Calendar(onChange, value) {
   // const [value, onChange] = useState<valueer>(new Date());

    return (
        <div>
            <ReactCalendar minDate={new Date()} onClickDay={(date) => console.log(date)}/>
        </div>
    )
}

export default Calendar;