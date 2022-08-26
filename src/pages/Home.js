import React from 'react'
import image from '../assets/SAYUNI INVESTMENTS LLC.jpg'
import './Home.css'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate();
    return (
        <div className='home'>
            <div>
                <img src={image} alt={"Logo"}></img>
            </div>
            <div className='info-item'>
                <h1>Home Selling</h1>
                <h2>Solutions</h2>
                <h3>We make the property selling experience as easy as possible!</h3>
                <button onClick={() => navigate('/contact')}>
                    Contact Us
                </button>
            </div>
        </div>
    )
}

export default Home