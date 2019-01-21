import React from 'react';
import './Tag.css';

let Tag = (props) => {
    return (
        <div className={"Tag " + props.color}>{props.children}</div>
    );
}

export default Tag;