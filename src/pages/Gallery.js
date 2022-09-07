import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import house from '../assets/About Photo1.png'
import logo from '../assets/SAYUNI INVESTMENTS LLC.jpg'

function Gallery() {
    return (
        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={logo}
                    alt="House slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={house}
                    alt="House slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Gallery