import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const logoGithub = <FontAwesomeIcon icon={faGithub}/>;
    const logoLinkedin = <FontAwesomeIcon icon= {faLinkedin}/>;
    const logoTwitter= <FontAwesomeIcon icon= {faTwitter}/>;
    return(
        <div className="footer">
           <footer>
            <a name="contacto"></a>
             
           <div className="footerTitulo">
               <h2>Contáctame</h2>
           </div>

           <div className="logoRedes">

            <a href="https://github.com/AgLpz" target="_blank"><i>{logoGithub}</i></a>
            <a href="https://www.linkedin.com/in/agustin-l%C3%B3pez-525089199/" target="_blank"><i>{logoLinkedin}</i></a>
            <a href="https://twitter.com/aglpz_"target="_blank" ><i>{logoTwitter}</i></a>
           </div>
           <div className="footerTitulo">
               <p className="derechosDeAutor">2021 Agustín López - Todos los dechos reservados. </p>
           </div>
        </footer>
        </div>
    )
};

export default Footer;