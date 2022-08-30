import React from 'react'
import "./Navbar.css";
import Formulario from "../formulario/Formulario";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';





const Navbar = ({isScrolling}) => {
    const toTheTop  = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"});
    }
    const { register, formState: {errors}, watch, handleSubmit } = useForm(); 
    const formularioIniciar = watch('formularioIniciar');


    

    

  return (
   
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`} >
        <div className='navbar-logo' onClick={toTheTop}>Inicio Porfolio</div>
        <div className='boton-perfil'>
        <li><a href='#profile' className='selected'><p>Perfil</p></a></li></div>
        <div className='boton-contacto'>
        <li><a href='#contactame' className='selected'><p>Contactame</p></a></li></div>
        <div className='boton-ilustracion'>
        <li><a href='#ilustraciones' className='selected'><p>proyectos</p></a></li></div>
          
        <div className='pregunta-formulario'>
      <label className="cuadrado">Formulario de contacto</label>
      <input type="checkbox"  {...register('formularioIniciar')} />
      </div>
     
      {formularioIniciar && ( 
         <Formulario/> 
         )}
      
    </nav>
    
  )
}

export default Navbar