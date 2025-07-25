import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-900 text-white py-2'>
        <div className='logo'>
            <span className='font-bold text-xl mx-8'>iTask</span>
        </div>
        <ul className="flex gap-6 mx-9" >
            <li className='cursor-pointer hover:font-bold transition-allduration-200'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-allduration-200'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar