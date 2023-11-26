'use client'
import React from 'react'
import Register from '@/components/Forms/RegisterUser'
import RegisterBarbershops from '@/components/Forms/RegisterBarbershops'
import { useState } from 'react'
export default function RegisterPage() {
    const [showForm, setShowForm] = useState(false)
    return (
        <div>
            {showForm ? <RegisterBarbershops/> : <Register/>}

            <button onClick={()=> setShowForm(!showForm)}>{showForm ? 'Cambiar a Usuario' : 'Cambiar a Barberia'}</button>
        </div>
    )
}
