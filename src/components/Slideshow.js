import '../styles/Images.css'
import React from 'react'
import velo1 from '../assets/velo1.png'
import velo2 from '../assets/velo2.png'
import velo3 from '../assets/velo3.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

function Slideshow() {
    return (
        <div className='img-block' align="center">
            <hr className='img-hr'></hr>
            <Carousel className='img-slide' autoPlay showStatus={false} interval={5000} infiniteLoop >

                    <img src={velo1} alt="vélo1" />
                    <img src={velo2} alt="vélo2" />
                    <img src={velo3} alt="vélo3" />

            </Carousel>
            <hr className='img-hr'></hr>
        </div>
    )
}

export default Slideshow