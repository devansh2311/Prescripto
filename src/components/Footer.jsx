import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            {/* ---------left side--------------- */}
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-40'/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6' >Prescripto brings healthcare to your fingertips, offering quick and easy appointments with top doctors. Experience personalized care anytime, anywhere with just a few clicks.</p>
            </div>

            {/* ---------center side--------------- */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About Us</NavLink>
                    <NavLink to='contact'>Contact Us</NavLink>
                    <NavLink>Privacy Policy</NavLink>
                </ul>
            </div>

            {/* ---------right side--------------- */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>(805) 318 0025</li>
                    <li>contact@prescripto.com</li>
                </ul>
            </div>
        </div>
        {/*---------------Copyright Section -----------------  */}
        <div>
            <hr />
            <p className='py-5 text-center text-sm'>Copyright © 2024 Prescripto - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer