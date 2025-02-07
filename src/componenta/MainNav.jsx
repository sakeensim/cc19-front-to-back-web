import React from 'react'
import { Link } from 'react-router'

function MainNav() {
  return (
    <nav className='bg-violet-600 text-white flex justify-between font-semibold px-8 py4 p-2'>
       <div className='flex gap-4'>
       <Link to="/">Home</Link>
       <Link to ="/about">About</Link>
       </div>
        
        <div className='flex gap-4'>
        <Link to ="/register">Register</Link>
        <Link to ="/login">Login</Link>
        </div>
    </nav>
  )
}

export default MainNav