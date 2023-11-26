'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookie from 'js-cookie'

export default function BarbershopRoute({ children }) {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const role = Cookie.get('role')


    useEffect(() => {
        if (role !== '201') {
            router.push('/not-found')
        } else {
            setLoading(false)
        }
    }, [role])

    if (loading) {
        return null // Aquí puedes retornar un componente de carga si lo prefieres
    }

    return role === '201' ? children : null
}