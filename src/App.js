import './App.css';
import { useState } from 'react';
import LandingPage from './components/landingPage/LandingPage';
import NavBar from './components/landingPage/NavBar';
import Footer from './components/landingPage/Footer';
import CreateProfile from './components/newDev/CreateProfile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CommPage from './components/landingPage/CommPage';
import Devcard from './components/DevCard/DevCard';

function App() {
  const[data, setData] = useState({})

  function handleClick(id){
    fetch(`http://localhost:9292/devs/${id}`)
    .then(response => response.json())
    .then(d => {
      setData(d)
    console.log(d)})
  }

  return (
    <div className="App">
      <Router>
      <NavBar  name="Submit profile"/>
    <Switch>
      <Route exact path='/'>
      <LandingPage onClick={handleClick}/>
      </Route>
      <Route path='/createProfile'>
      <CreateProfile/>
      </Route>
      <Route path='/community'>
       <CommPage/>
      </Route>
      <Route path="/devs/:id">
<Devcard data={data}/>
      </Route>
    </Switch>
    <Footer/>
    </Router>
    
    </div>
  );
}

export default App;
