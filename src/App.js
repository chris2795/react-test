import React from 'react';
import Navbar from './navigation/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from  './pages/Home'
import Services from  './pages/Services'
import Products from  './pages/Products'
import SignIn from  './pages/SignIn'





function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-in" exact component={SignIn} />
     
      </Switch>
    </Router>
  );
}

export default App;
