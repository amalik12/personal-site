import React, { Component } from 'react';
import './Sidebar.css';
import Logo from '../Logo';
import NavLink from '../NavLink';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { color: '#27ae60' };
    this.setColor = this.setColor.bind(this);
  }

  setColor(color) {
    this.setState({color});
  }

  render() {
    return (
      <div className="Sidebar">
        <Logo color={this.state.color} setColor={this.setColor} />
        <ul className="sidebar-list">
          <NavLink link="/" color="#27ae60" setColor={this.setColor} className="sidebar-link">About.</NavLink>
          <NavLink link="/resume" color="#3498db" setColor={this.setColor} className="sidebar-link">Resume.</NavLink>
          <NavLink link="/projects" color="#6c5ce8" setColor={this.setColor} className="sidebar-link">Projects.</NavLink>
          <NavLink link="/contact" color="#e74c3c" setColor={this.setColor} className="sidebar-link">Contact.</NavLink>
        </ul>
      </div>
    );
  }
}

export default Sidebar;