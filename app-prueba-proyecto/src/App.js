import './App.css';
import Home from './components/common/Navbar';
import Footer from './components/common/Footer';
import Cards from './components/common/Cards';
import Map from './components/common/Map';
import Hoteles from './components/pages/Hoteles';
import Restaurantes from './components/pages/Restaurantes';
import Login from './components/pages/Login';
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


    <Switch>
      
      <Route path="/hoteles"><Hoteles/> </Route>
      <Route path="/restaurantes"><Restaurantes/> </Route>
      <Route path="login" exact><Login/></Route>
      <Route path="/"><Map/></Route>    
       
    </Switch>
   
    
    <Cards/>
    <Footer className="footer"/>
  
    </div>  
     </Router>
  );
}

export default App;
