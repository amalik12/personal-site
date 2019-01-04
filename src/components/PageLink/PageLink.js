import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setColor } from '../../actions';

let PageLink = props => {
    return (
        <Link className={props.className} to={props.link} onClick={() => { window.scrollTo(0,0); props.setColor(props.color); }}>
            {props.children}
        </Link>
    );
}

export default connect(null, { setColor })(PageLink);