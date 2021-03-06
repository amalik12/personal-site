import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Sidebar from '../Sidebar';
import About from '../About';
import Resume from '../Resume';
import Projects from '../Projects';
import Contact from '../Contact';

let App = () => {
    return (
      <div className="App">
        <Router>
          <div className="main-container">
            <Sidebar/>
            <div className="content">
              <Switch>
              <Route exact path="/" component={About} />
              <Route path="/resume" component={Resume} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
}

export default App;