import React, { Component } from 'react';
import './Projects.css';
import ProjectItem from '../ProjectItem/';
import { revealOptions } from '../../util';
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
    }

    componentWillUnmount() {
        ScrollReveal().clean(this.nodes);
    }
    
    render() {
        return (
            <div className="Projects">
                <ProjectItem ref={node => this.nodes.push(node)} large={true} title="Groop" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
                tags={['react', 'mongodb', 'nodejs', 'redis']}
                github="https://github.com/amalik12/groop" image="groop.gif"/>
                <ProjectItem ref={node => this.nodes.push(node)} right={true} large={true} title="Draftnet" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
                tags={['django', 'tensorflow', 'angularjs']}
                github="https://github.com/viking-sudo-rm/draftnet/" image="draftnet.png"/>
                <ProjectItem ref={node => this.nodes.push(node)} large={true} title="Dining Plus" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
                tags={['android', 'java', 'sqlite']}
                github="https://github.com/amalik12/dining_plus" image="diningplus.png"/>
            </div>
        );
    }
}

export default Projects;