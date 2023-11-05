import React from 'react'
import * as FaIcons from 'react-icons/fa6';
export default function Users() {
    return (
        <section className='grid grid-cols-5 auto-rows-2'>
            <div className='bg-firstColor-fC  col-span-2 flex flex-wrap p-2 justify-between'>
                <div className=' w-1/2 h-1/2 bg-slate-100 border-2 border-black flex flex-col gap-3 p-5'>
                    <div className='flex justify-between items-center'>
                        <p>Visitors</p>
                        <FaIcons.FaEllipsisVertical />
                    </div>
                    <div className='flex flex-col'>
                        <strong>30,794</strong>
                        <span>+ 22%</span>
                    </div>
                </div>
                <div className='w-1/2 h-1/2 bg-slate-100 border-2 border-black'>
                    contact
                </div>
                <div className='w-1/2 h-1/2 bg-slate-100 border-2 border-black'>
                    attributes
                </div>
                <div className='w-1/2 h-1/2 bg-slate-100 border-2 border-black'>
                    revenue
                </div>
            </div>
            <div className='bg-firstColor-fC border-2 col-span-3'>User Card</div>
            <div className='bg-firstColor-fC border-2 col-span-3'>User Card</div>
            <div className='bg-firstColor-fC border-2 col-span-2'>User Card</div>


        </section>
    )
}
