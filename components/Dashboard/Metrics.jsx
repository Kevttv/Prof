'use client'
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

async function CountUsers () {
    const res = await fetch('https://adso-lookstyle.onrender.com/api/v1/users')
    const data = await res.json()
    
    console.log(data)
}

async function Metrics () {
    CountUsers()
    return (
        <div>
            <Line
                data={{
                    labels: [
                        
                    ],
                    datasets: [
                        {
                            data: [],
                            backgroundColor: "purple",
                        },
                    ],
                }}
            />
        </div>
    );
};
export default Metrics;

