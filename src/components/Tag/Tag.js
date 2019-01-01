import React from 'react';
import './Tag.css';
import { connect } from 'react-redux';

let colorMap = {
    '#3498db': '',
    '#6c5ce8': 'purple'
}

const mapStateToProps = (state) => {
    return {
        color: state.color
    }
}

let Tag = (props) => {
    return (
        <div className={"Tag " + colorMap[props.color]}>{props.children}</div>
    );
}

export default connect(mapStateToProps)(Tag);