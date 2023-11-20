'use client'
import { useState } from "react";
import React from "react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa6";
import * as HiIcons from "react-icons/hi";

export default function Nav() {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div className={`flex flex-col justify-evenly gap-1 h-screen ${isExpanded ? 'bg-dakColor-dC' : 'w-1/6 bg-dakColor-dC'}`}>
      <div className="mt-2">
        <h1 className="text-lg text-center text-white">Name Barbershop</h1>
      </div>
      <nav className=" w-auto mx-2">
        <ul className="">
          <li>
            <Link className="Links" href="/">
              <HiIcons.HiHome />
              {isExpanded && 'Home'}
            </Link>
          </li>
          <li>
            <Link className="Links" href="/dashboard">
              <HiIcons.HiViewGrid />
              {isExpanded && 'Dashboard'}
            </Link>
          </li>
          <li>
            <Link className="Links" href="/dashboard/calendar">
              <FaIcons.FaCalendarDays />
              
              {isExpanded && 'Calendar'}
            </Link>
          </li>
          <li>
            <Link className="Links" href="/dashboard/gallery">
              <HiIcons.HiPhotograph />
              
              {isExpanded && 'Pictures'}
            </Link>
          </li>
          <li>
<<<<<<< HEAD
            <Link className="Links" href="/dashboard/users">
              <FaIcons.FaUsersLine />
              
              {isExpanded && 'Users'}
            </Link>
          </li>
          <li>
=======
>>>>>>> f409612d7301beb4d1cf0ad8159fcd2a7b056935
            <Link className="Links" href="/dashboard/notifications">
              <FaIcons.FaBell />
              
              {isExpanded && 'Notifications'}
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={()=> setIsExpanded(!isExpanded)}>
        {isExpanded ? 'collapse' : 'expand'}
      </button>
      {/* <div className='border-2 h-24 w-auto mx-4 flex gap-2 items-center text-white '>
                <h2 className='text-[18px]'>Logout</h2>
                <FaIcons.FaArrowRightToBracket />
            </div> */}
      <div className="CardProfile">
        <div>
          <img
            className="w-12 h-12 rounded-full"
            src="https://unavatar.io/github/Kevttv"
            alt="Profile"
          />
        </div>
        <div>
          <h2 className="font-bold text-[15px]">Kevin Virgen Tapasco</h2>
          <p className="font-bold text-[10px]">LookStyle</p>
        </div>
      </div>
    </div>
  );
}
