'use client'
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react';
import Link from 'next/link'

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    
    setIsAuthenticated(!!token);
  }, []);
  return (
    <div>
      Its a home page
      <nav>
        <li>
          {isAuthenticated && <Link href="/dashboard">Dashboard</Link>}
          {!isAuthenticated && <Link href="/login">Login</Link>}
          {!isAuthenticated && <Link href="/register">Register</Link>}
        </li>
      </nav>
    </div>




  )
}
