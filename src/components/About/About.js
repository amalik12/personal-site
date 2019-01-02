import React from 'react';
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './About.css';

let About = () => {
    const intro = () => <h1>Hi, I'm <Link to="/contact" className="highlight">Adisa!</Link></h1>;
    const info = () => <h1 style={{transitionDelay: '200ms'}}>I'm a developer based in <a href="http://nyc.gov" className="highlight">New York, NY.</a> Currently, I'm working at <a href="http://bloomberg.com" className="highlight">Bloomberg</a> as a Software Engineer.</h1>
    let items = [intro, info]
    return (
      <div className="About">
        <TransitionGroup>
          {items.map(item =>
            (<CSSTransition
            timeout={700}
            appear={true}
            classNames="fade"
          >
          {item}
          </CSSTransition>)
          )}
        </TransitionGroup>
      </div>
    );
}

export default About;