import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className='bg-secondColor-sC h-[40vh] w-[50vh] items-center flex justify-center'>
      <h1>
          Hello
        </h1>
      </div>
      <div className='bg-secondColor-sC h-[40vh] w-[50vh] items-center flex justify-center'>
      <h1>
          Hello
        </h1>
      </div>
      <nav>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </nav>

        
    </div>
  )
}
