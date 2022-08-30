//import { Slides } from "infinite-react-carousel/lib";
import React from "react";



const slidesinfo =  [
    
    {
        src:"https://i.pinimg.com/564x/08/c6/6b/08c66b7f4e614c8947428afcd22855b0.jpg",
        alt: "Full-Color ",
        desc: "Full-Color ",
    }
    ,{
        src:"https://i.pinimg.com/564x/fe/85/e8/fe85e8a714b628b30074c3498bc7e341.jpg",
        alt:"Framework ",
        desc:"Framework ",
    }
   ,{
        src:"https://i.pinimg.com/564x/ea/15/b4/ea15b4e7c2257e79e5b165e920007ae7.jpg",
        alt:"Sketch ",
        desc:"Sketch ",
    }
    ,{
        src:"https://i.pinimg.com/564x/74/f6/bf/74f6bf83a931c0e16f6dd4fa95a4a90e.jpg",
        alt:"Line-Full-Color ",
        desc:"Line-Full-Color ",
    }
    ,{
        src:"https://i.pinimg.com/564x/f9/e5/87/f9e587e9db703cb1e48907ad489fa8ed.jpg",
        alt:"Cute-Full-color ",
        desc:"Cute-Full-color ",
    }
    ,{
        src:"https://i.pinimg.com/564x/f5/88/2f/f5882ffe74da6f346fb025dbc085b46f.jpg",
        alt:"Black-And-White ",
        desc:"Black-And-White ",
    }
    ,{
        src:"https://i.pinimg.com/564x/bb/62/bc/bb62bc855ffcfe1a8282a00f91dd9cf8.jpg",
        alt:"Speed-Sketch ",
        desc:"Speed-Sketch ",
    }
    
 ];
 const slides = slidesinfo.map(slide => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt}/>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
 ))

 export default slides;