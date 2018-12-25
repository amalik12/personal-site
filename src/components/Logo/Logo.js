import React from 'react';
import { connect } from 'react-redux';
import './Logo.css';

const mapStateToProps = (state) => {
  return {
    color: state.color
  }
}

let Logo = ({color}) => {
    return (
      <div className="Logo" style={{background: color}}>
        Adisa Malik.
      </div>
    );
}

export default connect(mapStateToProps)(Logo);