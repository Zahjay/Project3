import React, { Component } from 'react';
import './App.css';
import Index from './components/Index';

//Importing React Router 
import {
  BrowserRouter as Router,
  Link,
  Route,
 
} from 'react-router-dom'


class App extends Component {
 
  render() {
    return (
      <Router>
        <div className="App">
        <nav>
          <ul>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login"> Log In</Link></li>
              </ul>
            </nav>
          <main>
            <Route path="/" component={Index} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
