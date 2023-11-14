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

async function Metrics () { 

    return (
        <div className="m-5 w-auto  ">
            <Line 
                data={{
                    labels: [
                        "2023",
                        "2023",
                        "2023",
                        "2023",
                        "2023",
                        "2023"
                    ],
                    datasets: [
                        {
                            data: [105, 106, 110, 120, 150, 120],
                            backgroundColor: 'blue',
                            borderColor: 'white',
                            
                            
                        },
                    ],
                }}
                options={{
                    scales: {
                        x: {
                            ticks: {
                                color: 'white', // Cambia el color de los textos en el eje x a blanco
                            },
                        },
                        y: {
                            ticks: {
                                color: 'white', // Cambia el color de los textos en el eje y a blanco
                            },
                        },
                    },
                }}
            />
        </div>
    );
};
export default Metrics;

