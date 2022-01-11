import './App.css';
import Home from './common/Navbar.jsx';
import Footer from './common/Footer.jsx';
import Cards from './common/Cards';
import Map from './common/Map';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="container">
    <header style={{zIndex:1}}><Home/></header>


    {/* <Switch> */}
       <Map/>
    {/* </Switch> */}
   
    
    <Cards/>
    <Footer className="footer"/>
  
    </div>  
     </Router>
  );
}

export default App;
