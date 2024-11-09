import React from "react";
import './index.css';
import Calendar from "react-calendar";
import { DateRangePicker } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


function Booking() {

    const [openDate, setOpenDate] = useState(false);
    const [selectedDate, setSelectedDate] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      });

    const currentDate = new Date().toJSON().slice(0, 10);

    const handleOpen = () => {
        setOpenDate(!openDate);
    }

    return (
        <div className="booking-container">
            <div className="booking-content">

                <button onClick={handleOpen} className="booking-buttons">
                    <div className="booking-divide-calendar-icon">
                        <img src="https://www.svgrepo.com/show/533393/calendar-lines.svg" alt="calendar-icon" className="booking-calendar-icon"/>
                    </div>
                        
                        <p>Check-in</p>
                    <h3>{currentDate}</h3>
                    <p> ▲ </p>
                </button>

                <button onClick={handleOpen} className="booking-buttons">
                <img src="https://www.svgrepo.com/show/533393/calendar-lines.svg" alt="calendar-icon" className="booking-calendar-icon"/>
                    <p>Check-out</p>
                    <h3>{currentDate}</h3>
                    <p> ▼ </p>
                </button>

                {openDate ? <div className="open-calendar"> 
                    <DateRangePicker
                    ranges={[selectedDate]}
                    onChange={() => {}}/>
                     
                     </div> : <div></div>}

                <div className="booking-guests">
                    <p> Guests</p>
                    <div className="booking-counter-buttons">
                        <button className="booking-guests-button"> - </button>
                        <p className="booking-guests-counter"> 1 </p>
                        <button className="booking-guests-button"> + </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking;
