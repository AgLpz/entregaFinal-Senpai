import React from 'react';
import './cards.css'
import {
  Link
} from "react-router-dom";

const Cards = () => {
    return(
 <section className="section">
  <section className="cards">


    <Link to="/restaurantes" className="restaurante">
      <h3>
        Restaurantes
      </h3>
    </Link>
    <Link to="/supermercados" className="supermercados">  
      <h3>
        Supermercados
      </h3>
    </Link>
    <Link to="/vestimenta" className="vestimenta">
      <h3>
        Vestimenta
      </h3>
    </Link>
    <Link to="/papeleria" className="papelerias">
      <h3>
        Papelerias
      </h3>
    </Link>
    <Link to="/saludybelleza" className="saludybelleza" >
      <h3>
        Salud y belleza
      </h3>
    </Link>
    <Link to="/profesionales" className="profesionales">
      <h3>
        Profesionales
      </h3>
    </Link>
    <Link to="/hoteles" className="hoteleria">
      <h3>
        Hoteles
      </h3>
    </Link>
    <Link to="/entretenimiento" className="entretenimiento" >
      <h3>
        Entretenimiento
      </h3>
    </Link>
    <Link to="/noche"className="noche" >
      <h3>
        Vida nocturna
      </h3>
    </Link>
    <Link to="/kiosco" className="kiosco" >
      <h3>
        Kioscos
      </h3>
    </Link>
    <Link to="/mascotas" className="mascotas" >
      <h3>
        Mascotas
      </h3>
    </Link>
    <Link to="/emergencias"className="emergencia" >
      <h3>
        Emergencias
      </h3>
    </Link>
    <Link to="/farmacias" className="farmacia">
      <h3>
        Farmacias
      </h3>
    </Link>
    <Link to="/servicios" className="servicios">
      <h3>
        Servicios
      </h3>
    </Link>
    <Link to="/tecnologia" className="tecnologia">
      <h3>
        Tecnología
      </h3>
    </Link>
    <Link to="/mueblerias" className="muebleria">
      <h3>
        Mueblerías
      </h3>
    </Link>
  </section>
</section>

    )
};

export default Cards;
