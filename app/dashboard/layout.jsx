import React from 'react'
import Nav from '@/components/Dashboard/Nav'
import BarbershopRoute from '@/components/Dashboard/BarbershopRoute'



export default function LayoutDash({children}) {
    return (
        <BarbershopRoute>
        <section className='GridMain'> 
            <Nav/>
            {children}
        </section>
        </BarbershopRoute>
    )
}
