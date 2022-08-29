import React from 'react'
import gavel from '../assets/Gavel.png'
import './About.css'
import Button from 'react-bootstrap/Button'
function About() {
    return (
        <div className='about'>
            <h2>About Us</h2>
            <div className='our-team'>
                <p>We are a family based local real estate buying and
                    housing solution focusing on buying, renovating and renting homes
                    throughout North Alabama. Our goal is to build relationship with local community
                    and meeting the needs of our clients.
                </p>
            </div>
            <div className='about-us'>
                <img src={gavel} alt='gavel' style={{ maxWidth: '100%', maxHeight: '600px' }}></img>
                <div>
                    <p>If you are thinking of selling or are looking to sell your property, we can help you get a quick and hassle-free cash offer. We buy multifamily,
                        apartment homes and single-family homes in any condition.
                        Sayuni Investment Ince LLC is a real estate company that focuses on helping families around North Alabama easy way to sell their houses on
                        fairly. Selling a house can be difficult at times so we offer solutions to our clients based on their individual situation. We pride ourselves on
                        working one on one with each client to provide best solution possible to them
                        We are family based real estate solution company that focuses on helping North Alabamians like you to find solution for the problems that
                        most homeowner in America faces whether your family is going through foreclosure, reposition or just simply want to sell or you can't sell
                        your house, or any other reason; let us easy your mind for we are here to help navigate through it at easy. You have nothing to lose just
                        contact us at (256) 384. 8887</p>
                    <Button variant="custom" size="lg" type="submit">
                        Fill out the form and click submit
                    </Button>
                </div>
            </div>
            <div className='bottom'>
                <figure>
                    <img id='photo1' src={require('../assets/About Photo1.png')} alt="House"></img>
                    <figcaption>
                        <h3>
                            Let us help you...
                        </h3>
                        <p>
                            We buy houses in <strong>ANY CONDITION</strong> in North America. There are no fees and no obligation.
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img id='photo2' src={require('../assets/About Photo2.png')} alt="House"></img>
                    <figcaption>
                        <h3>
                            Find a solution to fit your situation
                        </h3>
                        <p>
                            We are focused on helping North Alabamians like you to find
                            solution for the problems that most homeowner in America
                            faces whether your family is going through foreclosure,
                            reposition or just simply want to sell or you can't sell your
                            house, or any other reasor
                        </p>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default About