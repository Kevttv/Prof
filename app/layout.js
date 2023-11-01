import Nav from '@/components/Dashboard/Nav'
import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex'>
        <div className='flex'>
          <Nav />
        {children}
        </div>
        
        
        </body>
    </html>
  )
}
