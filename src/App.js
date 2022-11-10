import './App.css';
import LandingPage from './components/landingPage/LandingPage';
import NavBar from './components/landingPage/NavBar';
import Footer from './components/landingPage/Footer';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  
  return (
    <div className="App">
      <Router>
    {/* <NavBar/> */}
    <Switch>
      <Route exact path='/'>
      <LandingPage/>
      </Route>
     
    </Switch>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
