import React from 'react'
import gavel from '../assets/Gavel.png'
import './About.css'

function About() {
    return (
        <div className='about'>
            <div className='our-team'>
                <h3>Our Team</h3>
                <h2>Sayuni Investment LLC</h2>
                <p>We are a family based local real estate buying and
                    housing solution focusing on buying, renovating and renting homes
                    throughout North Alabama. Our goal is to build relationship with local community
                    and meeting the needs of our clients.
                </p>
            </div>
            <div>
                <h2>About Us</h2>
                <img src={gavel} alt='gavel' style={{ maxWidth: '80%', maxHeight: '600px' }}></img>
                <p>If you are thinking of selling or are looking to sell your property, we can help you get a quick and hassle-free cash offer. We buy multifamily,
                    apartment homes and single-family homes in any condition.
                    Sayuni Investment Ince LLC is a real estate company that focuses on helping families around North Alabama easy way to sell their houses on
                    fairly. Selling a house can be difficult at times so we offer solutions to our clients based on their individual situation. We pride ourselves on
                    working one on one with each client to provide best solution possible to them
                    We are family based real estate solution company that focuses on helping North Alabamians like you to find solution for the problems that
                    most homeowner in America faces whether your family is going through foreclosure, reposition or just simply want to sell or you can't sell
                    your house, or any other reason; let us easy your mind for we are here to help navigate through it at easy. You have nothing to lose just
                    contact us at (256) 384. 8887</p>
                <button>Fill out the form and click submit</button>
            </div>
        </div>
    )
}

export default About