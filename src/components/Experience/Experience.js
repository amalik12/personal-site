import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import './Experience.css';
import Tag from '../Tag';

class Experience extends Component {
    componentDidMount() {
        ScrollReveal().reveal(this.node, { distance: '50px' });
    }

    render() {
        return (
            <div className="Experience" ref={node => this.node = node}>
                <div className="experience-header">
                    <img alt="" className="experience-header-icon" src={this.props.image}/>
                    <div className="experience-header-info">
                        <h3>{this.props.title}</h3>
                        <a className="experience-header-org" href={this.props.org[1]}>{this.props.org[0]}</a>
                    </div>
                    <div className="experience-header-details">
                        <div className="experience-header-details-text">{this.props.dates}</div>
                        <div className="experience-header-details-text">{this.props.location}</div>
                    </div>
                </div>
                <div className="experience-description">
                    {this.props.description}
                </div>
                {this.props.tags.map((item) => <Tag>{item}</Tag>)}
            </div>
        );
    }
}

export default Experience;