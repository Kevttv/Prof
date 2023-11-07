import React from 'react'
import Link from 'next/link'
import * as FaIcons from 'react-icons/fa6';
import * as HiIcons from 'react-icons/hi';

export default function Nav() {
    return (
        <div className='flex flex-col justify-evenly gap-1 h-screen bg-dakColor-dC'>
                <div className='mt-2'>
                    <h1 className='text-lg text-center text-white'>Name Barbershop</h1>
                </div>
                <nav className=' w-auto mx-2'>
                    <ul className=''>
                        <li>
                            <Link className='Links' href="/"><HiIcons.HiHome />Home</Link>
                        </li>
                        <li>
                            <Link className='Links' href="/dashboard"><HiIcons.HiViewGrid />Dashboard</Link>
                        </li>
                        <li>
                            <Link className='Links' href="/dashboard/calendar"><FaIcons.FaCalendarDays />Calendar</Link>
                        </li>
                        <li>
                            <Link className='Links' href="/dashboard/gallery"><HiIcons.HiPhotograph />Pictures</Link>
                        </li>
                        <li>
                            <Link className='Links' href="/dashboard/users"><FaIcons.FaUsersLine />Users</Link>
                        </li>
                        <li>
                            <Link className='Links' href="/dashboard/notifications"><FaIcons.FaBell />Notifications</Link>
                        </li>
                    </ul>
                </nav>
            {/* <div className='border-2 h-24 w-auto mx-4 flex gap-2 items-center text-white '>
                <h2 className='text-[18px]'>Logout</h2>
                <FaIcons.FaArrowRightToBracket />
            </div> */}
            <div className='CardProfile'>
                <div>
                    <img className='w-12 h-12 rounded-full' src="https://unavatar.io/github/Kevttv" alt="Profile" />
                </div>
                <div>
                    <h2 className='font-bold text-[15px]'>Kevin Virgen Tapasco</h2>
                    <p className='font-bold text-[10px]'>LookStyle</p>
                </div>
            </div>
        </div>
    )
}
