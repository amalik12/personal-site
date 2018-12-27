import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setColor } from '../../actions';
import './NavLink.css';

class NavLink extends Component {
  componentDidMount() {
    if (this.props.location.pathname === this.props.link)
      this.props.setColor(this.props.color);
  }

  render() {
    let style = this.props.location.pathname === this.props.link ? {color: this.props.color} : {};
    return (
      <Link to={this.props.link} onClick={() => this.props.setColor(this.props.color)}>
        <div className="NavLink" style={style}>{this.props.children}</div>
      </Link>
    );
  }
}

export default connect(null, { setColor })(withRouter(props => <NavLink {...props}/>));