import './App.css';
import LandingPage from './components/landingPage/LandingPage';
import NavBar from './components/landingPage/NavBar';
import Footer from './components/landingPage/Footer';
import CreateProfile from './components/newDev/CreateProfile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CommPage from './components/landingPage/CommPage';
function App() {
  
  return (
    <div className="App">
      <Router>
      <NavBar  name="Submit profile"/>
    <Switch>
      <Route exact path='/'>
      <LandingPage/>
      </Route>
      <Route path='/createProfile'>
      <CreateProfile/>
      </Route>
      <Router path='/community'>
       <CommPage/>
      </Router>
    </Switch>
    <Footer/>
    </Router>
    
    </div>
  );
}

export default App;
