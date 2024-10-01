import React, { useState } from 'react'
import {assets} from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)
    // when we have token true, we are logged in, else logged out

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={() => navigate('/')}
            src={assets.logo} alt="" className='w-44 cursor-pointer'/>
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                {/* primary color is added in tailwind.config.js file */}
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center justify-center gap-4'>
            {
                // if logged in --> show div, else show create account button
                token 
                ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img src={assets.profile_pic} alt="" className='w-8 rounded-full'/>
                    <img src={assets.dropdown_icon} alt="" className='w-2.5'/>
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 flex flex-col gap-4 p-4 '>
                            <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer '>My Profile</p>
                            <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer '>My Appointments</p>
                            <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer '>Logout</p>
                        </div>
                    </div>
                </div> 
                : <button onClick={() => navigate('/login')} className='px-8 py-2 bg-primary text-white rounded-full font-light hidden md:block'>Create Account</button> 
            } 
            {/* menu icon for small screens  */}
            <img onClick={() => setShowMenu(true)} src={assets.menu_icon} alt="" className='w-6 md:hidden'/>
            <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <div className='flex items-center justify-between px-5 py-6'>
                    <img src={assets.logo} alt="" className='w-36' />
                    <img src={assets.cross_icon} alt="" onClick={() => setShowMenu(false)} className='w-7'/> 
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <NavLink to='/' onClick={() => setShowMenu(false)}><p className='px-4 py-2 rounded inline-block hover:bg-primary hover:text-white'>HOME</p></NavLink>
                    <NavLink to='/doctors' onClick={() => setShowMenu(false)}><p className='px-4 py-2 rounded inline-block hover:bg-primary hover:text-white'>ALL DOCTORS</p></NavLink>
                    <NavLink to='/about' onClick={() => setShowMenu(false)}><p className='px-4 py-2 rounded inline-block hover:bg-primary hover:text-white'>ABOUT</p></NavLink>
                    <NavLink to='/contact' onClick={() => setShowMenu(false)}><p className='px-4 py-2 rounded inline-block hover:bg-primary hover:text-white '>CONTACT</p></NavLink>
                </ul>
                {/* added media query that if it is active then bg change */}
            </div>
        </div>
    </div>
  )
}

export default Navbar