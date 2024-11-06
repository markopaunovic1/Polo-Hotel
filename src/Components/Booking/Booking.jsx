import React from "react";
import './index.css';
import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import { useState } from "react";


function Booking() {

    const [open, setOpen] = useState(false);

    const currentDate = new Date().toJSON().slice(0, 10);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="booking-content">
            <button onClick={handleOpen} className="booking-buttons">
                <p>Check-in</p>
                <h3>{currentDate}</h3>
            </button>

            <button onClick={handleOpen} className="booking-buttons">
                <p>Check-out</p>
                <h3>{currentDate}</h3>
            </button>

            {open ? <div className="open-calendar"> <Calendar /> </div> : <div> Is closed </div>}
        </div>
    )
}

export default Booking;
