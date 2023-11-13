import React from 'react'

import * as FaIcons from 'react-icons/fa6';

export default function Dashboard() {
    return (
        <section className='grid grid-cols-6 grid-rows-6 gap-2 m-2'>
            
            <div className='col-span-3 row-span-3 flex flex-wrap justify-between items-center text-white  '>
                <div className='h-1/2 bg-gray-700 w-1/2 rounded-tl-xl p-3'>
                    Visitors
                </div>
                <div className='h-1/2 bg-red-500 w-1/2 rounded-tr-xl p-3 '>
                    Visitors
                </div>
                <div className='h-1/2 bg-violet-600 w-1/2 rounded-bl-xl p-3'>
                    Visitors
                </div>
                <div className='h-1/2 bg-black w-1/2 rounded-br-xl p-3'>
                    Visitors
                </div>
            </div>
            <div className='bg-firstColor-fC col-span-3 row-span-3'></div>
            <div className='bg-firstColor-fC col-span-4 row-span-3'></div>
            <div className='bg-firstColor-fC col-span-2 row-span-3'></div>


        </section>

    )
}
