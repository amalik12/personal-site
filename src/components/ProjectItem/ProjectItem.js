import React from 'react';
import './ProjectItem.css';
import Tag from '../Tag';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        color: state.color
    }
}

let ProjectItem = (props) => {
    let image = (props.large && <img className="project-image" src={props.image} alt=''/>)
    return (
        <div className={"ProjectItem " + (props.right ? 'right' : '')}>
            {image} 
            <div className="project-info">
                <h2 className="project-title">{props.title}</h2>
                {props.tags.map(item => <Tag>{item}</Tag>)}
                <p className="project-description">{props.description}</p>
                <a href={props.github} className="project-link" style={{color: props.color}}>
                    <i class="fab fa-github"></i> {props.github}
                </a>
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(ProjectItem);