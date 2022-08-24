import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Us</Link>
                </li>
                <li>
                    <Link to='/gallery'>Gallery</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
