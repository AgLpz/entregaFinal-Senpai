import React from 'react'

import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

const Home = () => {
  const props = {

    float:true,

    items: [
      {
        text: 'Inicio',
        link: '/'
      },
      {
        text: 'Contacto',
        link: '#contacto'
      },
      {
        text: 'Login',
        link: '#custom-bar'
      },
      {
              float:true

      }

    ],
    logo: {
      text: 'FIND',
      link: '/'

    },
    style: {
      barStyles: {
        background: '#273036'
      },
      sidebarStyles: {
        background: '#273036',
        buttonColor: '#ffff'
      },
  
    }
  }
  return <Navbar {...props} />
}
export default Home;