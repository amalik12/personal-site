import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Sidebar from '../Sidebar';
import About from "../About";

let App = () => {
    return (
      <div className="App">
        <Router>
            <div className="container">
              <Sidebar/>
              <Route exact path="/" component={About} />
            </div>
        </Router>
      </div>
    );
}

export default App;