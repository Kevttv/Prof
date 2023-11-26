import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
          Its a home page 
      <nav>
          <li>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </li>
        </nav>
    </div>




  )
}
