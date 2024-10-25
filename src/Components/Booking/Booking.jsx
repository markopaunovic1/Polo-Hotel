import React from "react";
import './index.css';
import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import { useState } from "react";


function Booking() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="booking-content">
            <button onClick={handleOpen}>
                <p>Check-in</p>
                <h3>25/10-24</h3>
            </button>
            {open ? <div> <Calendar /> </div> : <div> Is closed </div>}
        </div>
    )
}

export default Booking;
