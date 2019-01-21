import React, { Component } from 'react';
import './Projects.css';
import ProjectItem from '../ProjectItem/';
import { revealOptions } from '../../util';
import { projects } from '../../content';
import ScrollReveal from 'scrollreveal';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.nodes = [];
    }

    componentDidMount() {
        ScrollReveal().reveal(this.nodes, revealOptions);
        document.title = "Adisa Malik - Projects";
        document.getElementById('favicon').href = 'favicon3.png';
        document.getElementById('theme').content = '#6c5ce8';
    }

    componentWillUnmount() {
        ScrollReveal().clean(this.nodes);
    }
    
    render() {
        return (
            <div className="Projects">
                {projects.map((item, index) => {
                    return <ProjectItem key={index} ref={node => this.nodes.push(node)} large={true}
                    right={index % 2 === 1} {...item} />
                })}
            </div>
        );
    }
}

export default Projects;