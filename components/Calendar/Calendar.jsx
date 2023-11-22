'use client'
'use strict';
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";


export default function Calendar() {
    const [events, setEvents] = useState([]);

    // const eventos = [
    //     {
    //         title: "Rendezvous",
    //         start: getDate("2023-10-07"),
    //         end: getDate("2023-12-10")
    //     }
    // ]

    useEffect(() => {
        fetch('https://adso-lookstyle.onrender.com/api/v1/appointments')
            .then(response => response.json())
            .then(data => {
                const mappedData = data.data.map(item => ({
                    title: item.id,
                    start: item.appointment_date,
                    end: item.appointment_date 
                }));
                setEvents(mappedData);
                console.log(mappedData[0])
            });
    }, []);

    return (
        <div className="text-center m-5 h-screen w-auto overflow-y-hidden">
            <FullCalendar
                defaultView="dayGridMonth"
                header={{
                    left: "prev,next",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                }}
                themeSystem="simplex"
                plugins={[dayGridPlugin]}
                events={events}
            />
        </div>
    );
}