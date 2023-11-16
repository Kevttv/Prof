'use client'
import React from "react";
// import "./styles.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
//import timeGridPlugin from "@fullcalendar/timegrid";

import "@fullcalendar/core";
import "@fullcalendar/daygrid";
import "@fullcalendar/timegrid";

import events from "./events";

export default function Calendar() {
    return (
        <div className="text-center m-5 h-screen w-auto overflow-y-hidden">
            <FullCalendar 
                defaultView="dayGridMonth"
                header={{
                    left: "prev,next",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                }}
                themeSystem="Simplex"
                plugins={[dayGridPlugin]}
                events={events}
            />
        </div>
    );
}
