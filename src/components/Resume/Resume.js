import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import './Resume.css';
import Experience from '../Experience';
import { revealOptions } from '../../util';
import { resume } from '../../content';


class Resume extends Component {
    constructor(props) {
        super(props);
        this.nodes = [];
    }

    componentDidMount() {
        ScrollReveal().reveal(this.nodes, revealOptions);
        document.title = "Adisa Malik - Resume";
        document.getElementById('favicon').href = 'favicon2.png';
        document.getElementById('theme').content = '#3498db';
    }

    componentWillUnmount() {
        ScrollReveal().clean(this.nodes);
    }

    render() {
        return (
          <div className="Resume">
            <div className="header" ref={node => this.nodes.push(node)}>
                <h2>Education.</h2><span className="divider"></span>
            </div>
            <Experience ref={node => this.nodes.push(node)} image="yale.png" title="Bachelor of Science (B.S.), Computer Science"
            org={['Yale University', 'http://yale.edu']} dates="Aug 2013 - May 2017"
            location="New Haven, CT" tags={['c', 'java', 'javascript']} description=''/>
            <div className="header" ref={node => this.nodes.push(node)}>
                <h2 className="header-text">Experience.</h2><span className="divider"></span>
            </div>
            {resume.map((item, index) => <Experience key={index} ref={node => this.nodes.push(node)} {...item}/>)}
                <div ref={node => this.nodes.push(node)}><a href="resume-adisa-5.pdf" className="resume-download"><i className="fas fa-file-pdf"></i> <span className="resume-download-text">Download Resume</span></a></div>
          </div>
        );
    }
}

export default Resume;