import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './NavLink.css';
import PageLink from '../PageLink';

class NavLink extends Component {
  constructor(props) {
    super(props);
    this.updateColor.bind(this);
  }

  componentDidMount() {
    this.updateColor(this.props.location.pathname);
    this.props.history.listen((location, action) => {
      this.updateColor(location.pathname);
    });
  }

  updateColor(pathname) {
    if (pathname === this.props.link) {
      this.props.setColor(this.props.color);
    }
  }

  render() {
    let isActive = this.props.location.pathname === this.props.link;
    let expanded = this.props.mobile && this.props.expanded;
    return (
      <li className={"NavLink " + (this.props.mobile ? 'mobile ' : 'desktop ')
      + (expanded && 'expanded ')}
      >
        <PageLink className={this.props.className + ' ' + (isActive && 'active')} onClick={this.props.onClick} link={this.props.link} setColor={this.props.setColor} color={this.props.color} style={isActive ? {...this.props.style, color: this.props.color} : this.props.style}>
          {this.props.children}
        </PageLink>
      </li>
    );
  }
}

export default withRouter(NavLink);