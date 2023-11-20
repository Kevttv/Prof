'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentInfo = () => {
    const [data, setData] = useState({ appointments: [], users: [], barbershops: [] });

    useEffect(() => {
        const fetchAppointments = axios.get('https://adso-lookstyle.onrender.com/api/v1/appointments');
        const fetchUsers = axios.get('https://adso-lookstyle.onrender.com/api/v1/users');
        const fetchBarbershops = axios.get('https://adso-lookstyle.onrender.com/api/v1/barbershops');

        Promise.all([fetchAppointments, fetchUsers, fetchBarbershops])
            .then((responses) => {
                setData({
                    appointments: responses[0].data,
                    users: responses[1].data,
                    barbershops: responses[2].data,
                });
            })
            .catch((error) => {
                console.error('Error fetching appointments data: ', error);
                console.error('Error fetching users data: ', error);
                console.error('Error fetching barbershops data: ', error);
            })
    }, []);

    return (
        <div>
            {
                // console.log(data.appointments.data)
                // console.log(data.barbershops.data[1])
            }
        </div>
    );
};

export default AppointmentInfo;
