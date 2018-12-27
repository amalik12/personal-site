import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Sidebar from '../Sidebar';
import About from '../About';
import Resume from '../Resume';

let App = () => {
    return (
      <div className="App">
        <Router>
            <div className="container">
              <Sidebar/>
              <Route exact path="/" component={About} />
              <Route exact path="/resume" component={Resume} />
            </div>
        </Router>
      </div>
    );
}

export default App;