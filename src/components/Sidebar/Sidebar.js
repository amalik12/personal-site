import React, { Component } from 'react';
import './Sidebar.css';
import Logo from '../Logo';
import NavLink from '../NavLink';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <Logo/>
        <NavLink text="About." link="/" color="#27ae60"/>
        <NavLink text="Resume." link="/resume" color="#3498db"/>
        <NavLink text="Projects." link="/projects" color="#6c5ce8"/>
        <NavLink text="Contact." link="/contact" color="#e74c3c"/>
      </div>
    );
  }
}

export default Sidebar;