import React from 'react'
import Nav from '@/components/Dashboard/Nav'


export default function LayoutDash({children}) {
    return (
        <section className='GridMain'>
            <Nav/>
            {children}
        </section>
    )
}
