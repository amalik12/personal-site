import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './About.css';
import PageLink from '../PageLink';

class About extends Component {
  componentDidMount() {
    document.title = "Adisa Malik - About";
    document.getElementById('favicon').href = 'favicon1.png';
    document.getElementById('theme').content = '#27ae60';
  }
  
  render() {
      const intro = () => <h1>Hi, I'm <PageLink link="/contact" color="#e74c3c" className="highlight">Adisa!</PageLink></h1>;
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
}

export default About;