import React, { Component } from 'react';
import './App.css';

//Importing React Router 
import {
  BrowserRouter as Router,
  Link,
  Route,
 
} from 'react-router-dom'

//import components
import Index from './components/Index.jsx';
// import Header from './components/Header.jsx';
// import Nav from './components/Nav.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path="/" component={ Index } />

        </div>
      </Router>
    );
  }
}

export default App;
