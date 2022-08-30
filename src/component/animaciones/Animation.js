import React from 'react'
import "./Animation.css"
import girl from "../../media/girl.mp4";
import gif from "../../media/gif.mp4";
import presentacion from "../../media/presentacion.mp4";

const Animation = (props) => {
  return (
    <div className='title-animacion'>
       <h1>“Siempre he hecho mis bocetos, como la gente diría, por diversión… He trabajado para divertirme, y si también ha divertido al público, mucho mejor para mí.”
       </h1>

       <div className='video1'>
        <video className="animation3" src={girl} autoPlay loop muted />
        <p>Girl-Lofi</p></div>
       </div>

  )
}

export default Animation