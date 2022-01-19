import React, { useState, useEffect } from 'react'
import './hoteles.css'
import CardsLocalesContainer from './CardLocalesContainer';


const Restaurantes = () => {
  
const [locales, setLocales] = useState([])
  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const data = await fetch('http://localhost:3000/auth/locales');
    const locals = await data.json()
    setLocales(locals)
  }
 



 return(
        <main className="main">
          <h2 className="titulo">
            Restaurantes
        </h2>
        <CardsLocalesContainer locales={locales}/>
       </main>

    )
}

export default Restaurantes;