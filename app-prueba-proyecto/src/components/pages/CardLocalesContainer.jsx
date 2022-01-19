import React, { useState, useEffect } from 'react'
import './hoteles.css'
import CardLocales from './CardLocales';
  

const CardsLocalesContainer = ({ locales }) => {
  

    return(
        <>

        { 
        locales.map((local) => (
         <CardLocales key={local.nombre}
          nombre={local.nombre} 
          informacion={local.informacion} 
          link={local.link} 
          localHoteles={local.localHoteles} 
          button={local.button}  
       
         />
        ))}
        </>
        


   

    )
}

export default CardsLocalesContainer;