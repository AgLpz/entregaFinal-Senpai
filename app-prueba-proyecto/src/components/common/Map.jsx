import React from 'react'
import './map.css'


const Map = () => {
    return(
 <main className="main">
  <h2 className="titulo">
    FIND
  </h2>
  <section className="section-mapa">
    <iframe className="mapa" src="https://www.google.com/maps/d/u/0/embed?mid=1QjuOvB5vvrpryOf1CCh5SA9Ed6qH0wxp" width={640} height={480} />      
  </section>
</main>

    )
}

export default Map;