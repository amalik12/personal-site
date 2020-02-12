import React from 'react';
import './Experience.css';
import Tag from '../Tag';

let Experience = React.forwardRef((props, ref) => (
    <div className="Experience" ref={ref}>
        <div className="experience-header">
            <img alt="" className="experience-header-icon" src={props.image}/>
            <div className="experience-header-info">
                <h3 className="experience-header-position">{props.title}</h3>
                <a className="experience-header-org" href={props.org[1]}>{props.org[0]}</a>
            </div>
            <div className="experience-header-details desktop">
                <div className="experience-header-details-text">{props.dates}</div>
                <div className="experience-header-details-text">{props.location}</div>
            </div>
        </div>
        <div className="experience-header-details mobile">
                <div className="experience-header-details-text">{props.dates}</div>
                <div className="experience-header-details-text">{props.location}</div>
            </div>
        <p className="experience-description">
            {props.description}
        </p>
        {props.tags.map((item) => <Tag key={item}>{item}</Tag>)}
    </div>
));

export default Experience;