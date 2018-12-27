import React from 'react';
import { Link } from "react-router-dom";
import './About.css';

let About = () => {
    return (
      <div className="About">
        <h1>Hi, I'm <Link to="/contact" className="highlight">Adisa!</Link></h1>
        <h1>I'm a developer based in <span className="highlight">New York, NY.</span> Currently, I'm working at <a href="http://bloomberg.com" className="highlight">Bloomberg</a> as a Software Engineer.</h1>
      </div>
    );
}

export default About;