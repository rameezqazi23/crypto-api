import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='rounded-div'>
            <Link to='/'>
                <h1>Crypto Base</h1>
            </Link>
            <div>
                <ThemeToggle />
            </div>

            <div>
                <Link to='/signin'>Sign In</Link>
                <Link to='/signup'>Sign Up</Link>

            </div>
            {/* Menu Icon */}
            <div>
                <AiOutlineMenu />
            </div>
            {/* Mobile Menu */}
            <div>
                <ul>
                    <li to='/'>Home</li>
                    <li to='/'>Account</li>
                    <li to='/'><ThemeToggle /></li>

                </ul>
                <div>
                    <Link to='/signin'>Sign In</Link>
                    <Link to='/signup'>Sign Up</Link>
                </div>
            </div>



        </div>
    )
}

export default Navbar
