import React from 'react';
import { connect } from 'react-redux';
import './Logo.css';
import NavMenu from '../NavMenu';
import NavLink from '../NavLink';

const mapStateToProps = (state) => {
  return {
    color: state.color
  }
}

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menu: false, opacity: 0 };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.setOpacity = this.setOpacity.bind(this);
  }

  toggleMenu() {
    this.setState({menu: !this.state.menu});
    if (this.state.opacity) {
      this.setState({opacity: 0});
    } else {
      setTimeout(this.setOpacity, 500);
    }
  }

  setOpacity() {
    if (this.state.opacity) {
      this.setState({opacity: 0});
    } else {
      this.setState({opacity: 1});
    }
  }

  render() {
    return (
      <div className={"Logo " + (this.state.menu && 'expanded')} style={{background: this.props.color}}>
        Adisa Malik.
        <NavMenu active={this.state.menu} onClick={this.toggleMenu}/>
        <ul className="logo-mobile-menu">
          <NavLink onClick={this.toggleMenu} mobile={true} expanded={this.state.menu} link="/" color="#27ae60" style={{opacity: this.state.opacity}} className="mobile-nav-link">About.</NavLink>
          <NavLink onClick={this.toggleMenu} mobile={true} expanded={this.state.menu} link="/resume" color="#3498db" style={{opacity: this.state.opacity}} className="mobile-nav-link">Resume.</NavLink>
          <NavLink onClick={this.toggleMenu} mobile={true} expanded={this.state.menu} link="/projects" color="#6c5ce8" style={{opacity: this.state.opacity}} className="mobile-nav-link">Projects.</NavLink>
          <NavLink onClick={this.toggleMenu} mobile={true} expanded={this.state.menu} link="/contact" color="#e74c3c" style={{opacity: this.state.opacity}} className="mobile-nav-link">Contact.</NavLink>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Logo);