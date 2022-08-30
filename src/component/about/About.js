import React from 'react';
import "./About.css";
import imageSoul from "../../media/imageSoul.jpg";

const About = (props) => {
    return (
        <section className='profile' id='profile'>
        <div className='about-container'>
            <div className='about-desc'>
                <h3>Un poco de mí</h3>
                <p>Hola, bienvenido a mi porfolio, soy ilustrador/animador estoy en este mundo digital audiovisul desde hace mas de 5 años, y en todo momento 
                    presento mis proyectos y trabajos con el mayor esfuerzo que se me es posible, tengo proyectos de trabajos asi como personales. Saludos!
                </p>
            </div>
            <div className='about-img'>
                <img className="imgen" src={imageSoul} />
            </div>
        </div>
        </section>
    )
}

export default About