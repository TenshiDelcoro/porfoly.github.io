import React, { Component } from 'react';
import "./Formulario.css"
import "./mail.php"

class Formulario extends Component {
  state = {
    nombre: "",
    email: "",
    esAdmin: "",
    genero: "",
    color: "",
    comentarios: ""
  };

  valueToState = ({ name, value, checked, type }) => {
    this.setState(() => {
      return { [name]: type === "checkbox" ? checked : value };
    });
  };

  render() {
    return (
      <div className="formulario-container">
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <form action="https://formsubmit.co/ezedelcoro@gmail.com" method="POST"  className="lista-container">
          <label className='nombre' htmlFor="nombre">Nombre</label>
          <input className='name'
            name="nombre"
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={event => this.valueToState(event.target)}
          />
          <label className='email' htmlFor="email">Correo Electrónico</label>          
          <input className='emeil'
            name="_cc"
            type="email"
            placeholder="Email Address"
            onChange={event => this.valueToState(event.target)}
          />
          
        <label className='pais' htmlFor="pais">¿De que pais eres?</label>
        <select className='seleccion'
          name="pais"
          onChange={event => this.valueToState(event.target)}
        >
          <option value={""}>- selecciona uno -</option>
          <option value={"ES"}>España</option>
          <option value={"ARG"}>Argentina</option>
          <option value={"MX"}>Mexico</option>
        </select>
        <label className='comentario' htmlFor="comentarios">Comentarios</label>
        <textarea className='comentary'
          name="mensaje"
          placeholder="Escribe tus sugerencias"
          onChange={event => this.valueToState(event.target)}
        />
        <label className='telefono' htmlFor="telefono">Telefono</label>
        <input className="ingrese-num"
        name='telefono'
          type="text"
          placeholder="Ingresa tu número"
          onChange={event => this.valueToState(event.target)}
        />
        <button className='boton' type='submit' name="boton">Enviar</button>
        <div className='final'>Me pondre en contacto lo antes posible</div>
        <input type="hidden" name="_next" value="http://localhost:3000"></input>
        <input type="hidden" name="_captcha" value="false"></input>
      </form>
            </div >
            
        );
  }
}

export default Formulario