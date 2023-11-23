'use client'
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGrid from '@fullcalendar/timegrid'
import listGrid from '@fullcalendar/list'
import '../../app/globals.css'




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
                console.log(mappedData)
            });
    }, []);

    return (
        <div className="p-7 overflow-auto h-screen">
            <FullCalendar 
                initialView="dayGridMonth"
                headerToolbar={{
                    left: "prev,next",
                    center: "title",
                    right: "dayGridMonth,listWeek"
                }}
                themeSystem="simplex"
                plugins={[dayGridPlugin, listGrid]}
                events={events}
                timeZone="America/Bogota"
            />
            
        </div>
    );
    
}