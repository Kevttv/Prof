'use client'
import React, { useState } from "react";
import axios from "axios";



export default function Citas() {
    const [fech, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [UserId, SetUser] = useState("");
    const [BarbershopId, setBarberia] = useState("");
    const [BarberId, setBarbero] = useState("");



    const handleSubmit = async (event) => {
        event.preventDefault();
        // const localDate = new Date(fech);
        // localDate.setMinutes(localDate.getMinutes() - localDate.getTimezoneOffset());
        const Citadata = { appointment_date: fech, appointment_hour: hora, UserId: UserId, BarbershopId: BarbershopId, BarberId: BarberId };
        const response = await axios.post("https://adso-lookstyle.onrender.com/api/v1/appointments", Citadata)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                else if (error.request) {
                    console.log(error.request);
                }
                else {
                    console.log('ERROR', error.message)
                }
                console.log('ERROR', error.config)
            })
    };


    return (
        <div className=" h-1/3 w-2/4 bg-gray-500">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="email">Fecha de la cita</label>
                <input
                    type="date"
                    id="fech"
                    value={fech}
                    onChange={e => setFecha(e.target.value)}
                />
                <label htmlFor="password">Hora de la cita</label>
                <input
                    type="time"
                    id="hora"
                    value={hora}
                    onChange={e => setHora(e.target.value)}
                />
                <label htmlFor="email">User id</label>
                <input
                    type="number"
                    id="UserId"
                    value={UserId}
                    onChange={e => SetUser(e.target.value)}
                />
                <label htmlFor="email">Barberia id</label>
                <input
                    type="number"
                    id="BarbershopId"
                    value={BarbershopId}
                    onChange={e => setBarberia(e.target.value)}
                />
                <label htmlFor="email">Barbero id</label>
                <input
                    type="number"
                    id="BarberId"
                    value={BarberId}
                    onChange={e => setBarbero(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}