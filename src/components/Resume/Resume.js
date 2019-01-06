import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import './Resume.css';
import Experience from '../Experience';
import { revealOptions } from '../../util';


class Resume extends Component {
    constructor(props) {
        super(props);
        this.nodes = [];
    }

    componentDidMount() {
        ScrollReveal().reveal(this.nodes, revealOptions);
        document.title = "Adisa Malik - Resume";
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
            <Experience ref={node => this.nodes.push(node)} image="bloomberg.png" title="Software Engineer"
            org={['Bloomberg', 'http://bloomberg.com']} dates="Sept 2018 - Present"
            location="New York, NY" tags={['c++', 'python']} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'/>
            <Experience ref={node => this.nodes.push(node)} image="datadog.png" title="Solutions Engineer"
            org={['Datadog', 'http://datadoghq.com']} dates="Jan 2018 - June 2018"
            location="New York, NY" tags={['python', 'javascript']} description=''/>
            <Experience ref={node => this.nodes.push(node)} image="bi.png" title="Front End Engineering Intern"
            org={['Business Insider', 'http://businessinsider.com']} dates="June 2017 - Aug 2017"
            location="New York, NY" tags={['javascript', 'php', 'angularjs']} description=''/>
            <Experience ref={node => this.nodes.push(node)} image="yale.png" title="Undergraduate Learning Assistant"
            org={['Yale University', 'http://yale.edu']} dates="Sept 2016 - Dec 2016"
            location="New Haven, CT" tags={['c']} description=''/>
            <Experience ref={node => this.nodes.push(node)} image="socrob.png" title="Research Intern"
            org={['Yale Social Robotics Lab', 'http://scazlab.yale.edu']} dates="June 2016 - Aug 2017"
            location="New Haven, CT" tags={['python', 'opencv']} description=''/>
            <div ref={node => this.nodes.push(node)} className="resume-download"><i className="fas fa-file-pdf"></i> <span className="resume-download-text">Download Resume</span></div>
          </div>
        );
    }
}

export default Resume;