import { useState } from 'react'
import './cardLocales.css'
          
const CardLocales = ({ nombre, informacion, link, button,localHoteles }) => {
  
    
    
    return(
<section className="local1">
    <h2>{nombre}</h2>
    <img src={link} alt={nombre} /> 
    <p>Puedes encontrarnos en: {informacion}</p>
    <button>{button}</button>
    {localHoteles}

    </section>


    )
}

export default CardLocales;