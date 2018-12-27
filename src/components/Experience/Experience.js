import React from 'react';
import './Experience.css';
import Tag from '../Tag';

let Experience = (props) => {
    return (
        <div className="Experience">
            <div className="experience-header">
                <img alt="" className="experience-header-icon" src={props.image}/>
                <div className="experience-header-info">
                    <h3>{props.title}</h3>
                    <a className="experience-header-org" href={props.org[1]}>{props.org[0]}</a>
                </div>
                <div className="experience-header-details">
                    <div className="experience-header-details-text">{props.dates}</div>
                    <div className="experience-header-details-text">{props.location}</div>
                </div>
            </div>
            <div className="experience-description">
                {props.description}
            </div>
            {props.tags.map((item) => <Tag>{item}</Tag>)}
        </div>
    );
}

export default Experience;