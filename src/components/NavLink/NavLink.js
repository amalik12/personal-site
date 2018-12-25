import React from 'react';
import { withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setColor, setPage } from '../../actions';
import './NavLink.css';

let NavLink = (props) => {
    let style = props.location.pathname === props.link ? {color: props.color} : {};
    return (
      <Link to={props.link} onClick={() => props.setColor(props.color)}><div className="NavLink" style={style}>{props.text}</div></Link>
    );
}

export default connect(null, { setColor })(withRouter(props => <NavLink {...props}/>));