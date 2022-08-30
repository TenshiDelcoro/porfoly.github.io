import React from 'react'
import "./Slider.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from './Slides';
import "./Slider.css";

const Slider = () => {
  return (
    <section className='ilustraciones' id='ilustraciones'>
    <div className='carousel-container'>
        <div className='carousel-tittle'>
            <h2>Mis Ilustraciones </h2>
        </div>
        <Carousel 
            plugins={['arrows']}
            slidesPerPage={3}
            infinite
            animationSpeed={200}
            centered
            offset={50}
            itemWidth={400}
            slides={Slides}
            breackpoints={{
              960: {
                slidesPerPage: 1,
                arrows: false,
                itemWidth: 250,
              },
            }}
        
            />
    </div>
    </section>
  )
}

export default Slider
