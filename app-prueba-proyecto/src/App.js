import './App.css';
import Home from './components/common/Navbar';
import Footer from './components/common/Footer';
import Cards from './components/common/Cards';
import Map from './components/common/Map';
import Hoteles from './components/pages/Hoteles';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";




function App() {


  return (
    <Router>
    <div className="container">
    <header style={{zIndex:1}}><Home/></header>


    {/* <Switch> */}
       <Map/>
       {/* <Hoteles  /> */}
    {/* </Switch> */}
   
    
    <Cards/>
    <Footer className="footer"/>
  
    </div>  
     </Router>
  );
}

export default App;
