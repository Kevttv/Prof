import React from 'react'
import InfoUsers from '@/components/Dashboard/Info';
import Metrics from '@/components/Dashboard/Metrics';
import * as FaIcons from 'react-icons/fa6';

export default function Dashboard() {
    return (
        <section className='grid grid-cols-6 grid-rows-6 gap-2 m-2'>
            
            <div className='col-span-3 row-span-3 flex flex-wrap justify-between items-center text-white  '>
                <div className='h-1/2 w-1/2 bg-firstColor-fC rounded-tl-xl p-3'>
                    Visitors
                </div>
                <div className='h-1/2 w-1/2 bg-secondColor-sC rounded-tr-xl p-3 '>
                    Appointments
                </div>
                <div className='h-1/2  w-1/2 bg-graytColor-gC rounded-bl-xl p-3'>
                    Sales
                </div>
                <div className='h-1/2  w-1/2 bg-dakColor-dC rounded-br-xl p-3'>
                    Users
                </div>
            </div>
            <div className=' col-span-3 row-span-3 rounded-xl bg-graytColor-gC '>
            <Metrics/>
            </div>
            <div className=' col-span-4 row-span-3 '>
                <InfoUsers/>
            </div>
            <div className='bg-firstColor-fC col-span-2 row-span-3 rounded-xl'></div>


        </section>

    )
}
