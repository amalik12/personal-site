import React from 'react';
import './ProjectItem.css';
import Tag from '../Tag';

let ProjectItem = React.forwardRef((props, ref) => (
    <div ref={ref} className={"ProjectItem " + (props.right ? 'right' : '')}>
        {props.large && <div className="project-image-container"><img className="project-image" src={props.image} alt=''/></div>} 
        <div className="project-info">
            <h2 className="project-title">{props.title}</h2>
            {props.tags.map(item => <Tag key={item} color='purple'>{item}</Tag>)}
            <p className="project-description">{props.description}</p>
            <a href={props.github} className="project-link">
                <i className="fab fa-github"></i> {props.github.split('https://')[1]}
            </a>
        </div>
    </div>
));

export default ProjectItem;