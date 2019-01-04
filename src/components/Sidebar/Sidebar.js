import React, { Component } from 'react';
import './Sidebar.css';
import Logo from '../Logo';
import NavLink from '../NavLink';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <Logo/>
        <NavLink link="/" color="#27ae60" className="sidebar-link">About.</NavLink>
        <NavLink link="/resume" color="#3498db" className="sidebar-link">Resume.</NavLink>
        <NavLink link="/projects" color="#6c5ce8" className="sidebar-link">Projects.</NavLink>
        <NavLink link="/contact" color="#e74c3c" className="sidebar-link">Contact.</NavLink>
      </div>
    );
  }
}

export default Sidebar;