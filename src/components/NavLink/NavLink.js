import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setColor } from '../../actions';
import './NavLink.css';
import PageLink from '../PageLink';

class NavLink extends Component {
  constructor(props) {
    super(props);
    this.updateColor.bind(this);
  }

  componentDidMount() {
    this.updateColor();
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
    let style = this.props.location.pathname === this.props.link ? {color: this.props.color} : {};
    return (
      <PageLink link={this.props.link} color={this.props.color}>
        <div className="NavLink" style={style}>{this.props.children}</div>
      </PageLink>
    );
  }
}

export default withRouter(connect(null, { setColor })(NavLink));