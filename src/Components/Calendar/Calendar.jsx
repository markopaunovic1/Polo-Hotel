import React from "react";
import { useState } from "react";
import ReactCalendar from "react-calendar";

const valuePiece = Date();

const valueer = valuePiece;

function Calendar() {
    const [value, onChange] = useState<valueer>(new Date());

    return (
        <div>
            <ReactCalendar onChange={onChange} value={value} />
        </div>
    )
}

export default Calendar;