import React from 'react'
import Link from 'next/link'

export default function Nav() {
    return (
        <div className=' flex column justify-between h-screen w-64 py-5 px-4 overflow-hidden z-50 bg-firstColor-fC'>
            <nav className='w-full'>
                <ul className=' border-2'>
                    <li className='flex mb-1 list-none'>
                        <Link className='Links' href="/dashboard">Home</Link>
                    </li>
                    <li>
                        <Link className='Links' href="/">Home</Link>
                    </li>
                    <li>
                        <Link className='Links' href="/dashboard">Home</Link>
                    </li>
                    <li>
                        <Link className='Links' href="/dashboard">Home</Link>
                    </li>
                    <li>
                        <Link className='Links' href="/dashboard">Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
