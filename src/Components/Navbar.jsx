import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [navView, setNavView] = useState(false)
    const handleNavigation = () => {
        setNavView(!navView)
    }
    return (
        <div className='rounded-div flex items-center justify-between h-20 font-bold'>
            <Link to='/'>
                <h1 className='text-2xl'>Crypto Base</h1>
            </Link>
            <div className='hidden md:block ease-in duration-500'>
                <ThemeToggle />
            </div>

            <div className='hidden md:block'>
                <Link className='p-4 hover:text-accent' to='/signin'>Sign In</Link>
                <Link className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl' to='/signup'>Sign Up</Link>

            </div>
            {/* Menu Icon */}
            <div onClick={handleNavigation} className='block md:hidden justify-end cursor-pointer z-10'>
                {!navView ? <AiOutlineMenu /> : <AiOutlineClose />}
            </div>
            {/* Mobile Menu */}

            {/* md:hidden fixed w-full h-[90%] flex flex-col justify-between items-center left-0 top-20 mx-auto bg-primary ease-in duration-500 */}

            <div className={!navView ? 'fixed left-[100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-500'
                : 'md:hidden fixed w-full h-[90%] flex flex-col justify-between items-center left-0 top-20 mx-auto bg-primary ease-in duration-500'}>
                <ul className='w-full p-4'>
                    <li className='border-b py-6' to='/'>Home</li>
                    <li className='border-b py-6' to='/'>Account</li>
                    <li className='py-6' to='/'><ThemeToggle /></li>

                </ul>
                <div className='flex flex-col w-full p-4'>
                    <Link to='/signin'>
                        <button className='w-full my-2 p-3 bg-primary text-primary burder border-secondary rounded-2xl shadow-xl'>Sign In</button>
                    </Link>
                    <Link to='/signup'>
                        <button className='w-full my-2 p-3 bg-button text-primary rounded-2xl shodow-xl'>Sign Up</button>
                    </Link>
                </div>
            </div>



        </div>
    )
}

export default Navbar
