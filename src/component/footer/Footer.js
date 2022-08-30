import React from 'react'
import "./Footer.css"
import qr from "../../media/qr.png"

const Footer = (props) => {
    return (
        <section className='Contactame' id='contactame'>
             
        <footer className='footer'>
            <div className='footer-info'>
                <h1>Delcoro Angel</h1>
                <p>Posadas-Misiones-Argentina</p>
            </div>
            <div className='footer-contact'>
                <h3>contactame</h3>
                <p>Vamos a trabajar</p>
                <div className='contacto-tel'>
                    <p>Mi tel: +54 376-5237717</p>
                    <a href="https://wa.link/v1q8oh" target="_blank" rel="noreferrer">
                        <i className='fab fa-whatsapp whatsapp'></i>
                    </a>
                </div>
                <div className='contac-img'>
                    <img className="imgen" src={qr} />
                </div>
            </div>
            <div className='footer-sns'>
                <div className='desing-by'>
                    InkSoul Lo posible por plasmar tus IDEAS
                </div>
                <div className='sns-link'>
                    <a href='https://www.linkedin.com/in/angel-delcoro-5167a8239' target="_blank" rel="noreferrer">
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a href='https://www.instagram.com/ink_soul.time/' target="_blank" rel="noreferrer">
                        <i className='fab fa-instagram instagram'></i>
                    </a>
                    <a href='https://facebook.com' target="_blank" rel="noreferrer">
                        <i className='fab fa-facebook facebook'></i>
                    </a>
                    <a href='https://cruddelporfolio.000webhostapp.com' target="_blank" rel="noreferrer">
                        <i className='fas fa-phone-volume '></i>
                    </a>
                  
                </div>
            </div>
           

        </footer>
        
        </section>
        
    )
}

export default Footer